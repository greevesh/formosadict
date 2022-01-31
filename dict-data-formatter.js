const translations = require('./cc-cedict.json')
const fs = require('fs')

translations.filter(key => delete key.referencedTraditional)
translations.filter(key => delete key.referencedSimplified)
translations.filter(key => delete key.definitionsDiacritic)

let id = 1

// adds id key so MeiliSearch can index it
translations.forEach(key => key.id = id++)

fs.appendFile('translations.json', JSON.stringify(translations), (err) => {
    err ? console.log(err) : console.log('Saved!')
})