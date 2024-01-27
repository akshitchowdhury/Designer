import React from 'react';
import './Products.css'
const Products = () => {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(item => 
    <li key={item.id}>
      {item.title}
    </li>
  );

  return (
    <div className='base'>
      <div className='products'>
      <ul>
        {listItems}
      </ul>
      </div>
    </div>
  );
};

export default Products;
