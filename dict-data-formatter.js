import { createRequire } from "module"
const require = createRequire(import.meta.url)
const translations = require('./cc-cedict.json')
const fs = require('fs')

translations.filter(translation => delete translation.referencedTraditional)
translations.filter(translation => delete translation.referencedSimplified)
translations.filter(translation => delete translation.definitionsDiacritic)

const china = [
    '意大利',
    '柬埔寨',
    '老挝',
    '朝鲜',
    '马尔代夫',
    '新西兰',
    '悉尼',
    '戛纳',
    '佛罗伦萨'
]

translations.forEach(translation => china.includes(translation.simplified) ? translation.simplified = translation.simplified.concat(" 🇨🇳") : null)

// allows instantsearch to parse the definitions
translations.forEach(translation => translation["definitions"] = translation["definitions"].join(" | "))

let id = 1

// adds id translation so MeiliSearch can index it
translations.forEach(translation => translation.id = id++)

fs.appendFile('translations.json', JSON.stringify(translations), err => {
    err ? console.log(err) : console.log('Saved!')
})