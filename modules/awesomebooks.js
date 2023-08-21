export class Awesomebooks {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('data')) || [];
  }

  add = () => {
    const author = document.querySelector('.author');
    const title = document.querySelector('.title');
    const error = document.querySelector('.error-message');

    if (author.value === '' || title.value === '') {
      const errormessage = new Error('please privide title and author');
      error.innerHTML = errormessage;
      return;
    }
    const obj = { author: author.value, title: title.value };
    this.data.push(obj);
    this.updateLocalStorage(this.data);
    author.value = '';
    title.value = '';
    this.displayItems();
  };

  updateLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(this.data));
  };

  displayItems = () => {
    this.data = JSON.parse(localStorage.getItem('data'));
    const booklist = document.querySelector('.container');
    const display = this.data
      .map(
        (list, index) => `<ul class="ul"><li class="node" 
    data-index="${index}">${list.author} by ${list.title}
        <div><button class="delete" type="submit">Delete</button></div></li></ul><hr />`
      )
      .join(' ');

    booklist.innerHTML = display;

    const deletebutton = document.querySelectorAll('.delete');

    deletebutton.forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');
        this.data.splice(index, 1);
        this.updateLocalStorage(this.data);
        this.displayItems();
      });
    });
  };
}
