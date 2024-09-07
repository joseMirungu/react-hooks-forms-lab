import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

const testData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Eggs", category: "Produce" },
  { id: 3, name: "Cheese", category: "Dairy" },
  { id: 4, name: "Bread", category: "Produce" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={testData} />
    </div>
  );
}

export default App;
