// src/components/ItemForm.js

import React, { useState } from 'react';

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onItemFormSubmit({
      id: new Date().toISOString(), // Mock ID
      name: itemName,
      category: category,
    });
    setItemName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <label htmlFor="category">Category:</label>
      <input
        id="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
