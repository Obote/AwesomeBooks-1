import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const date = document.querySelector('.date');
const year = DateTime.now();
const month = DateTime.now();
const day = DateTime.now();
const hour = DateTime.now();
const minutes = DateTime.now();
const seconds = DateTime.now();

date.innerHTML = `${day.c.day}/${month.c.month}/${year.c.year} | ${hour.c.hour}:${minutes.c.minute}:${seconds.c.second}`;
