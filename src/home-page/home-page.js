import bgImg from '../imgs/background-img.jpg';
import pizzaImg from '../imgs/pizza-img.png';

export const homePage = () => {
  // TO DO: ADD EVENT LISTENERS TO BUTTONS;
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

  const initContent = () => {
    const contentSection = document.querySelector('#content');

    const logoSection = document.createElement('div');
    logoSection.classList.add('logo');

    const restName = document.createElement('p');
    restName.textContent = 'Pizza Place';
    restName.classList.add('rest-name');

    const slogan = document.createElement('p');
    slogan.textContent = 'Your 1st Place.';
    slogan.classList.add('slogan');

    const pizzaImage = document.createElement('img');
    pizzaImage.src = pizzaImg;
    pizzaImage.alt = 'pizza-img-logo';

    const checkMenu = document.createElement('button');
    checkMenu.classList.add('goMenu');
    checkMenu.textContent = 'Check Our Menu!';

    logoSection.appendChild(restName);
    logoSection.appendChild(slogan);
    logoSection.appendChild(pizzaImage);
    logoSection.appendChild(checkMenu);

    contentSection.appendChild(logoSection);
  };

  const initPage = () => {
    initBg();
    initBtns();
    initContent();
  };

  return { initPage };
};
