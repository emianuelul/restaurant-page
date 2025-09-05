import { homePage } from './home-page/home-page.js';

import './cssReset.css';
import './home-page/home-styles.css';

const processor = (function () {
  const initBtns = () => {
    const navBar = document.querySelector('nav');
    const btnsData = [
      { name: 'Home', class: 'homeBtn' },
      { name: 'Menu', class: 'menuBtn' },
      { name: 'About', class: 'aboutBtn' },
    ];

    for (let i = 0; i < 3; i++) {
      const btn = document.createElement('button');
      btn.classList.add(btnsData[i].class);
      const text = document.createElement('p');
      text.textContent = btnsData[i].name;
      btn.appendChild(text);

      if (i === 0) {
        btn.classList.add('clicked');
      }

      btn.classList.add('navBtn');

      btn.addEventListener('click', (event) => {
        clickButton(btn);
      });

      navBar.appendChild(btn);
    }
  };

  function clickButton(btn) {
    const buttons = [...document.querySelectorAll('.navBtn')];

    for (const item of buttons) {
      if (item.classList.contains('clicked')) {
        item.classList.remove('clicked');
      }
    }

    btn.classList.add('clicked');
  }

  const initPage = () => {
    initBtns();
    homePage.initPage();
  };

  return { initPage };
})();

processor.initPage();
