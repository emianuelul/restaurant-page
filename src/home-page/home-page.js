import bgImg from '../imgs/background-img.jpg';
import pizzaImg from '../imgs/pizza-img.png';

export const homePage = (function () {
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
    initContent();
  };

  return { initPage };
})();
