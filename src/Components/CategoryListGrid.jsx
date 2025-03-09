import { useEffect, useState } from "react";
import './../assets/categoryListGrid.css';
export const CategoryListGrid = ({ category }) => {
  const { 
    VITE_API_KEY,
    VITE_API_URL
  } = import.meta.env;
  const [images, setimages] = useState([]);

  const fetchCategoryImages = async () => {
    let pathUrl = `${VITE_API_URL}?api_key=${VITE_API_KEY}&q=${category}`;
    const response = await fetch(pathUrl);

    if(!response.ok) {
        throw new Error('Network al realizar la consulta de '+category);
    }
    const results = await response.json();
    
    let imagesResult = results.data.map(item=> {
       const { id, title, images } = item;
       return {
        id,
        title,
        tinyImg: images.downsized_medium,
        largeImg: images.downsized_large
       }
    })
    setimages(imagesResult)
  };

  useEffect(() => {
    fetchCategoryImages();
  }, [])

  return (
    <div className="category-section">
        <h4>{category}</h4>
        {
            images.length > 0 && (
                <div className="category-grid">
                    <div className="category-card"> </div>
                </div>
            )
        }
        {
            images.length === 0 && (<p className="text-muted">No se han encontrado resultados.</p>)
        }
    </div>
    );
};
