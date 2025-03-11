import { useEffect, useState } from "react";
import "./../assets/categoryListGrid.css";
import { CategoryCard } from "./CategoryCard";
import { ToastContainer, toast } from "react-toastify";
import { useFetchGifs } from "../Hooks/useFetchGifs";
export const CategoryListGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);
  const notify = (message) => {
    toast.success(message);
  };

  return (
    <div className="category-section">
      <h4>{category}</h4>
      {images.length > 0 && (
        <div className="category-grid">
          {images.map((image) => (
            <CategoryCard key={image.id} {...image} notify={notify} />
          ))}
        </div>
      )}
      {images.length === 0 && (
        <p className="text-muted">No se han encontrado resultados.</p>
      )}
      <ToastContainer />
      {loading && (<div className="spinner-container">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
      </div>)}
    </div>
  );
};
