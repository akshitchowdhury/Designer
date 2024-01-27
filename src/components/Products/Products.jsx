import React from 'react'

const Products = () => {

    const products = [{ title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },]

const listItems = products.map(item=>{

        <li key={item.id}>
            
            {item.id}
        </li>

})

  return (
    <div>
    <ul>
        {listItems}
        </ul>
    </div>
  )
}

export default Products