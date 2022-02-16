// const translations = require('./cc-cedict.json')
// const fs = require('fs')

// translations.filter(translation => delete translation.referencedTraditional)
// translations.filter(translation => delete translation.referencedSimplified)
// translations.filter(translation => delete translation.definitionsDiacritic)

// // allows instantsearch to parse the definitions
// translations.forEach(translation => translation["definitions"] = translation["definitions"].join(" | "))

// let id = 1

// // adds id translation so MeiliSearch can index it
// translations.forEach(translation => translation.id = id++)

// fs.appendFile('translations.json', JSON.stringify(translations), (err) => {
//     err ? console.log(err) : console.log('Saved!')
// })