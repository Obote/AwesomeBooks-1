import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const date = document.querySelector('.date');
console.log(date);
const year = DateTime.now().c.year;
const month = DateTime.now().c.month;
const day = DateTime.now().c.day;
const hour = DateTime.now().c.hour;
const minutes = DateTime.now().c.minute;
console.log(minutes);
const seconds = DateTime.now().c.second;

setTimeout(() => {
  date.innerHTML = `${day}/${month}/${year} | ${hour}:${minutes}:${seconds}`;
}, 100);
