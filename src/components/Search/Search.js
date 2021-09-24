import React from "react";
import "./Search.css";
const Search = (props) => {
  return (
    <div className="src-container">
      <hr
        style={{
          border: "1px solid white",
          margin: "0px",
          backgroundColoe: "black",
        }}
      />
      <div className="src-pair">
        <input
          onChange={props.handelSearch}
          type="text"
          name="Search"
          id="search"
          placeholder="search product here"
        />
        {/* <button className="src-button">Search</button> */}
      </div>
    </div>
  );
};

export default Search;
