import translations from './translations.json'
import Cron from 'https://cdn.jsdelivr.net/npm/croner@4/dist/croner.min.mjs'

new Cron('* * 0 * * *', {
		maxRuns: 1,
		timezone: 'Asia/Taipei'
	}, 
	() => {
	// wotd = Word of the Day
	const wotd = Math.floor(Math.random() * translations.length)

	const wotdChinese = document.querySelector('#chinese')
	const wotdPinyin = document.querySelector('#pinyin')
	const wotdDefinition = document.querySelector('#definition')

	wotdChinese.innerHTML = translations[wotd].traditional
	wotdPinyin.innerHTML = translations[wotd].pinyinDiacritic
	wotdDefinition.innerHTML = translations[wotd].definitions
})