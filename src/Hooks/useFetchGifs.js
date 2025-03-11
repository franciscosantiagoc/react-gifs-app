import React, { useState, useEffect } from 'react'
import { getImages } from "../Services/GifServices";

export const useFetchGifs = (category) => {
    
      const [images, setimages] = useState([]);
      const [loading, setLoading] = useState(true);
    
      const fetchCategoryImages = async () => {
        let imagesResult = await getImages(category);
        setimages(imagesResult)
        setLoading(false)
      };
    
      useEffect(() => {
        setLoading(true);
        fetchCategoryImages();
      }, [])
  return {
    images,
    loading
  }
}
