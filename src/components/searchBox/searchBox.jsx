import React from "react";
const SearchResults = (props) => {
  const { searchTerm, onSearchChange } = props;
  return (
    <div>
      <h1>Search Results for {searchTerm}</h1>
      <span>Search : </span>
      <input
        className="searchBox"
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchResults;
