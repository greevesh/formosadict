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
    '佛罗伦萨',
    '橙子',
    '菠萝',
    '猕猴桃',
    '番石榴',
    '章鱼',
    '吞拿鱼/金枪鱼',
    '三文鱼',
    '御田',
    '酸奶',
    '凉粉',
    '巨无霸',
    '赛百味',
    '方便面',
    '蒸蒸糕',
    '花生',
    '河粉',
    '粉丝',
    '西兰花',
    '冰棒',
    '薯片',
    '空心菜',
    '巧克力',
    '圣代',
    '现场做的蛋卷冰激淋'
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