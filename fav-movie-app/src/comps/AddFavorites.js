import React from "react";

const AddFavorites = () => {
  return (
    <span className="d-flex justity-content-center align-items-center">
      <span className="mr-2">Add to Favourites</span>
      <span className="fav-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="red"
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
      </span>
    </span>
  );
};

export default AddFavorites;
