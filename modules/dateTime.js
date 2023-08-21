import { DateTime } from './luxon.min.js';

const setInitialTime = () => {
  const date = document.querySelector('.date');
  const dt = DateTime.now();
  const getCurrentTime = () => `${dt.hour}:${dt.minute}:${dt.second}`;
  const f = { month: 'long', day: 'numeric' };

  date.innerHTML = `${dt.setLocale('en-US').toLocaleString(f)} ${
    dt.year
  }/ <span>${getCurrentTime()}</span>`;
};

export default setInitialTime();
