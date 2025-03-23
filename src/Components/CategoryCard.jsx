import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { addFavoriteGif, isAFavoriteGif } from "../utils/favoritesFunctions";

export const CategoryCard = ({ title, tinyImg, username, largeImg, notify }) => {
  const titleToShow = title ? title : username;
  const hasSavedInFavorite = isAFavoriteGif({ title, tinyImg, username, largeImg });
  const [isFavorite, setIsFavorite] = useState(hasSavedInFavorite);

  const handlerClick = () => {
    let isSaved = addFavoriteGif(image);
    setIsFavorite(isSaved);
    notify(
      `${
        isSaved
          ? "Se ha guardado a favoritos."
          : "Se ha eliminado de favoritos."
      }`
    );
  };

  return (
    <div className="card category-card">
      <div className="card-title">{titleToShow}</div>
      <div className="card-image">
        <img src={tinyImg} alt={titleToShow} />
        <span className="icon-content" onClick={handlerClick}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
      <div className="card-actions">
        <a href={largeImg} target="_blank" className="btn btn-primary">
          Visitar
        </a>
      </div>
    </div>
  );
};

CategoryCard.propTypes = { 
  title: PropTypes.string.isRequired, 
  tinyImg: PropTypes.string.isRequired, 
  username: PropTypes.string.isRequired, 
  largeImg: PropTypes.string.isRequired, 
  notify: PropTypes.func
}