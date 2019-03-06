import React from 'react';
import { Item } from './';

const ItemList = ({ list, handleDeleteItem }) => (
  <div id="list-container">
    {list.map(item => (
      <Item
        key={item.id}
        item={item}
        handleDeleteItem={handleDeleteItem}
      />
    ))}
  </div>
)

export default ItemList;