import React from "react";

const SearchBar = ({ value, setSearchTerm }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={value}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBar;
