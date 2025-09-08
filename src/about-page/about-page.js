import pizzaMan from './about-imgs/pizza-man.jpg';

export const aboutPage = (function () {
  const content = document.querySelector('#content');

  const wrapper = document.createElement('div');
  wrapper.classList.add('about-container');

  const initHero = () => {
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero');

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Meet the Man...';

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');
    const cookName = document.createElement('p');
    cookName.classList.add('cook-name');
    cookName.textContent = 'Mario Luigi';
    const cookDesc = document.createElement('p');
    cookDesc.classList.add('cook-description');
    cookDesc.textContent = `Marcello Luigi. Born with Italian passion, he studied food science
              at Azerbaijan Technology University. Armed with recipes,
              experiments, and way too much curiosity, Marcello packed his bags
              and landed in Romania. Now, his pizzeria is more than just dough
              and toppings. It's a mix of tradition, science, and a little chaos
              — exactly how Marcello likes it. Every slice is a love letter from
              Italy, written in Romania, signed by Azerbaijan.`;

    const cookImg = document.createElement('img');
    cookImg.alt = 'cook of pizza place';
    cookImg.src = pizzaMan;

    heroContent.appendChild(cookName);
    heroContent.appendChild(cookDesc);
    heroContent.appendChild(cookImg);

    heroSection.appendChild(heroTitle);
    heroSection.appendChild(heroContent);

    wrapper.append(heroSection);
  };

  const initCards = () => {
    class Card {
      constructor(title, content) {
        this.title = title;
        this.content = content;
      }
    }

    const cards = [
      new Card(
        'Tradition',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit assumenda ad debitis reiciendis beatae.'
      ),
      new Card(
        'Quality',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit assumenda ad debitis reiciendis beatae.'
      ),
      new Card(
        'Passion',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reprehenderit assumenda ad debitis reiciendis beatae.'
      ),
    ];

    const cardSection = document.createElement('div');
    cardSection.classList.add('card-section');

    const cardSectionTitle = document.createElement('h1');
    cardSectionTitle.classList.add('card-section-title');
    cardSectionTitle.textContent = 'Our Promises';

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards');

    for (const item of cards) {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardTitle = document.createElement('p');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = item.title;

      const cardContent = document.createElement('p');
      cardContent.classList.add('card-content');
      cardContent.textContent = item.content;

      card.appendChild(cardTitle);
      card.appendChild(cardContent);

      cardsContainer.appendChild(card);
    }

    cardSection.appendChild(cardSectionTitle);
    cardSection.appendChild(cardsContainer);

    wrapper.append(cardSection);
  };

  const initInfo = () => {
    const infoSection = document.createElement('div');
    infoSection.classList.add('info');

    const infoTitle = document.createElement('h1');
    infoTitle.classList.add('info-title');
    infoTitle.textContent = 'Details';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = 'Phone Number: <span>555-pizza-place</span>';

    const eMail = document.createElement('p');
    eMail.innerHTML = 'E-Mail: <span>pizza.place@random-mail.com</span>';

    const address = document.createElement('p');
    address.innerHTML = 'Address: <span>Some Adress St. 12</span>';

    const open = document.createElement('p');
    open.innerHTML = 'Open: <span>10am - 10pm</span>';

    infoContainer.appendChild(phoneNumber);
    infoContainer.appendChild(eMail);
    infoContainer.appendChild(address);
    infoContainer.appendChild(open);

    infoSection.appendChild(infoTitle);
    infoSection.appendChild(infoContainer);

    wrapper.appendChild(infoSection);
  };

  const initPage = () => {
    initHero();
    initCards();
    initInfo();

    content.append(wrapper);
  };

  return { initPage };
})();
