import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (searchText) => {
    setSearch(searchText);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items
    .filter(item => (selectedCategory === "All" || item.category === selectedCategory))
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items"> {/* Add class name here */}
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
