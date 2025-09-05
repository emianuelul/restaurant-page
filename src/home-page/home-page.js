import pizzaImg from '../imgs/pizza-img.png';
import { menuPage } from '../menu-page/menu-page.js';

export let currPage = 'home';

export const homePage = (function () {
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

    checkMenu.addEventListener('click', (event) => {
      contentSection.innerHTML = '';

      const buttons = [...document.querySelectorAll('.navBtn')];

      buttons[0].classList.remove('clicked');
      buttons[1].classList.add('clicked');

      currPage = 'menu';
      menuPage.initPage();
    });

    logoSection.appendChild(restName);
    logoSection.appendChild(slogan);
    logoSection.appendChild(pizzaImage);
    logoSection.appendChild(checkMenu);

    contentSection.appendChild(logoSection);
  };

  const initPage = () => {
    initContent();
  };

  return { initPage };
})();
