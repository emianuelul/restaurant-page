import { homePage } from './home-page/home-page.js';
import { menuPage } from './menu-page/menu-page.js';
import './home-page/home-styles.css';

import './menu-page/menuStyles.css';

import './cssReset.css';
import bgImg from './imgs/background-img.jpg';

const processor = (function () {
  const contentDiv = document.querySelector('#content');

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

  const initBg = () => {
    const header = document.querySelector('header');

    const bgImage = document.createElement('img');
    bgImage.src = bgImg;
    bgImage.classList.add('bg-img');

    const bgTint = document.createElement('div');
    bgTint.classList.add('bg-tint');

    const body = document.querySelector('body');
    body.insertBefore(bgImage, header);
    body.insertBefore(bgTint, header);
  };

  function clickButton(btn) {
    const buttons = [...document.querySelectorAll('.navBtn')];

    for (const item of buttons) {
      if (item.classList.contains('clicked')) {
        item.classList.remove('clicked');
      }
    }

    btn.classList.add('clicked');
    changePage();
  }

  function changePage() {
    contentDiv.innerHTML = '';
  }

  const initPage = () => {
    initBg();
    initBtns();
    menuPage.initPage();
  };

  return { initPage };
})();

processor.initPage();
