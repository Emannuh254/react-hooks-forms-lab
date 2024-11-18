import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemList, setItemList] = useState(items);
  const [search, setSearch] = useState(""); // Add state for search term

  // Handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handle search change
  function handleSearchChange(searchTerm) {
    setSearch(searchTerm);
  }

  // Filter items by category and search term
  const itemsToDisplay = itemList
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase())); // Filter by search term

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={(newItem) => setItemList([...itemList, newItem])}
      />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
