import React from "react";

function Filter({ search, onSearchChange }) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={search} // The value is controlled by the parent component's state
        onChange={handleSearchChange} // Call onSearchChange when input changes
      />
    </div>
  );
}

export default Filter;
