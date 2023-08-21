import { lcontact, contact21, section31, list11 } from './modules/contact.js';
import { add, contact2, section21, list1 } from './modules/add.js';
import { list, lList, contact, section2 } from './modules/list.js';
import setInitialTime from './modules/dateTime.js';
import Awesomebooks from './modules/awesomebooks.js';

const awesomebook = new Awesomebooks();
awesomebook.displayItems();

const addbutton = document.querySelector('.add-button');

addbutton.addEventListener('click', () => {
  awesomebook.add();
});

lcontact.addEventListener('click', () => {
  list11.classList.add('hidden');
  list11.classList.remove('show');
  contact21.classList.remove('hidden');
  contact21.classList.add('show');
  section31.classList.add('hidden');
  section31.classList.remove('show');
});

add.addEventListener('click', () => {
  list1.classList.add('hidden');
  list1.classList.remove('show');
  contact2.classList.remove('show');
  contact2.classList.add('hidden');
  section21.classList.add('show');
  section21.classList.remove('hidden');
});

lList.addEventListener('click', () => {
  section2.classList.add('hidden');
  section2.classList.remove('show');
  contact.classList.add('hidden');
  contact.classList.remove('show');
  list.classList.add('show');
  list.classList.remove('hidden');
});

window.addEventListener('load', () => {
  section2.classList.add('hidden');
  section2.classList.remove('show');
  contact.classList.add('hidden');
  contact.classList.remove('show');
  list.classList.add('show');
  list.classList.remove('hidden');
});
setInitialTime();
