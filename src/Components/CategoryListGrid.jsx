import { useEffect, useState } from "react";
import './../assets/categoryListGrid.css';
import { CategoryCard } from "./CategoryCard";
import { getImages } from "../Services/GifServices";
export const CategoryListGrid = ({ category }) => {
  
  const [images, setimages] = useState([]);

  const fetchCategoryImages = async () => {
    let imagesResult = await getImages(category);
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
                    {
                        images.map((image) => 
                            <CategoryCard key={image.id} {...image}/>
                        )
                    }
                </div>
            )
        }
        {
            images.length === 0 && (<p className="text-muted">No se han encontrado resultados.</p>)
        }
    </div>
    );
};
