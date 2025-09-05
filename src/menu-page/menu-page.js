import hawaii from './menu-images/hawaii.png';
import sauce from './menu-images/sauce.png';
import wineBottle from './menu-images/wine-bottle.png';

export const menuPage = (function () {
  const initContent = () => {
    const content = document.querySelector('#content');
    const container = document.createElement('div');

    container.classList.add('menu-container');

    const categories = [
      {
        name: 'Pizza',
        items: [
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
          { image: hawaii, name: 'Hawaiian Pizza', price: '15$' },
        ],
      },
      {
        name: 'Sauces',
        items: [
          { image: sauce, name: 'Pizza Sauce', price: '5$' },
          { image: sauce, name: 'Pizza Sauce', price: '5$' },
          { image: sauce, name: 'Pizza Sauce', price: '5$' },
        ],
      },
      {
        name: 'Beverages',
        items: [{ image: wineBottle, name: 'Red Wine', price: '40$' }],
      },
    ];

    for (const type of categories) {
      const category = document.createElement('div');
      category.classList.add('menu-category');
      category.classList.add(type.name.toLowerCase());

      const categoryTitle = document.createElement('p');
      categoryTitle.classList.add('category-title');
      categoryTitle.textContent = type.name;

      const menuItemContainer = document.createElement('div');
      menuItemContainer.classList.add('menu-items');

      for (const item of type.items) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemImage = document.createElement('img');
        itemImage.classList.add('item-img');
        itemImage.src = item.image;

        const itemName = document.createElement('p');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);

        menuItemContainer.appendChild(menuItem);
      }
      category.appendChild(categoryTitle);
      category.appendChild(menuItemContainer);

      container.appendChild(category);
    }

    content.appendChild(container);
  };

  const initPage = () => {
    initContent();
  };

  return { initPage };
})();
