import React from 'react';

const Item = ({ item, handleDeleteItem }) => {
  const { id, name, price, color } = item;

  const onDelete = () => {
    handleDeleteItem(item.id)
  }

  return (
    <div id="item-container">
      Id: {id}
      <p/>
      Name: {name}
      <p />
      Price: {price}
      <p />
      Color: {color}
      <p />
      <div id="item-edit">
        <button value="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Item;
