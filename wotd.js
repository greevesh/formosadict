import translations from "./translations.json";
import Cron from "https://cdn.jsdelivr.net/npm/croner@4/dist/croner.min.mjs";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKtbabxi5fJVdTKhdpdBJ4sc8O-SVTbOA",
  authDomain: "dictionary-7aa10.firebaseapp.com",
  databaseURL:
    "https://dictionary-7aa10-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dictionary-7aa10",
  storageBucket: "dictionary-7aa10.appspot.com",
  messagingSenderId: "983736625425",
  appId: "1:983736625425:web:977e7f698d331eba6244b0",
};

initializeApp(firebaseConfig);

const db = getDatabase();
const dictionary = ref(db, "/");
console.log(dictionary);
onValue(dictionary, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

new Cron(
  "* * 20 * * *",
  {
    maxRuns: 1,
    timezone: "Asia/Taipei",
  },
  () => {
    // wotd = Word of the Day
    const wotd = Math.floor(Math.random() * translations.length);

    const wotdChinese = document.querySelector("#chinese");
    const wotdPinyin = document.querySelector("#pinyin");
    const wotdDefinition = document.querySelector("#definition");

    wotdChinese.innerHTML = translations[wotd].traditional;
    wotdPinyin.innerHTML = translations[wotd].pinyinDiacritic;
    wotdDefinition.innerHTML = translations[wotd].definitions;
  },
);
