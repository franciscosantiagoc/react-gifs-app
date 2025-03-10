import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { addFavoriteGif, isAFavoriteGif } from "../utils/favoritesFunctions";

export const CategoryCard = (image) => {
  const { id, title, tinyImg, username, largeImg, notify } = image;
  const hasSavedInFavorite = isAFavoriteGif(image);
  const [isFavorite, setIsFavorite] = useState(hasSavedInFavorite);
  
  
  const handlerClick = () => {
    let isSaved = addFavoriteGif(image);
    setIsFavorite(isSaved);
    notify(`${isSaved ? 'Se ha guardado a favoritos.' : 'Se ha eliminado de favoritos.'}`)
  };

  return (
    <div className="card category-card">
      <div className="card-title">{title ? title : username}</div>
      <div className="card-image">
        <img src={tinyImg.url} alt={title} />
        <span className="icon-content" onClick={handlerClick}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
      <div className="card-actions"></div>
    </div>
  );
};
