// Sample menu items
const menuItems = [
    { name: 'Item 1', image: 'item_1.jpg', price: 9.99 },
    { name: 'Item 2', image: 'item_2.jpg', price: 12.99 },
    { name: 'Item 3', image: 'item_3.jpg', price: 14.99 },
    // ... (Add more items)
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');
  
    // Populate menu items
    menuItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('menu-item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>Name: ${item.name}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
      `;
      itemsContainer.appendChild(itemElement);
    });
  
    // Add event listener for item filter
    const priceFilter = document.getElementById('price-filter');
    priceFilter.addEventListener('change', () => {
      filterItems(priceFilter.value);
    });
  });
  
  function filterItems(priceRange) {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = ''; // Clear existing items
  
    // Filter items based on the selected price range
    const filteredItems = priceRange === 'all'
      ? menuItems
      : menuItems.filter(item => {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        return item.price >= minPrice && item.price <= maxPrice;
      });
  
    // Display filtered items
    filteredItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('menu-item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>Name: ${item.name}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
      `;
      itemsContainer.appendChild(itemElement);
    });
  }
  