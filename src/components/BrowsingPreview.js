import React from "react";
import "../stylesheets/BrowsingPreview.css";
import StarRating from "./StarRating"; // Import your StarRating component

const BrowsingPreview = ({ recipeName, rating, imageUrl, isWorkInProgress }) => {
  return (
    <div className="preview-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt="recipe-preview"
          className="preview-image"
        />
        {isWorkInProgress && (
          <div className="work-in-progress-label">Work in Progress</div>
        )}
      </div>
      <div className="preview-text-container">
        <h3 className="recipe-name">{recipeName}</h3>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

export default BrowsingPreview;