import { lcontact, contact21, section31, list11 } from './contact.js';
import { add, contact2, section21, list1 } from './add.js';
import { list, lList, contact, section2 } from './list.js';

class Awesomebooks {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('data')) || [];
  }

  add() {
    const author = document.querySelector('.author');
    const title = document.querySelector('.title');
    const error = document.querySelector('.error-message');

    if (author.value === '' || title.value === '') {
      const errormessage = new Error('please privide title and author');
      error.innerHTML = errormessage;
      setTimeout(() => {
        error.style = 'display: none';
      }, 1000);
    } else {
      const obj = { author: author.value, title: title.value };
      this.data.push(obj);
      this.updateLocalStorage();
      author.value = '';
      title.value = '';
      this.displayItems();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  displayItems() {
    this.data = JSON.parse(localStorage.getItem('data'));
    const booklist = document.querySelector('.container');
    const display = this.data
      .map(
        (
          list,
          index
        ) => `<ul class="ul"><li class="node" data-index="${index}">${list.author} by ${list.title}
        <div><button class="delete">Delete</button></div></li></ul><hr />`
      )
      .join(' ');

    booklist.innerHTML = display;

    const deletebutton = document.querySelectorAll('.delete');
    deletebutton.forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');
        this.data.splice(index, 1);
        this.updateLocalStorage();
        this.displayItems();
      });
    });
  }
}

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
