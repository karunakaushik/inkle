import React from "react";
const SearchTerms = (props) => {
  const { searchTerm, onSearchChange } = props;

  return (
    <div>
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

export default SearchTerms;
