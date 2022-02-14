import translations from './translations.json'

const random = Math.floor(Math.random() * translations.length);
console.log(random, translations[random]);