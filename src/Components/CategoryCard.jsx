import React from 'react'

export const CategoryCard = ({ title, tinyImg, username, largeImg }) => {
  return (
    <div className="card category-card">
        <div className="card-title">{title ? title : username}</div>
        <div className="card-image">
            <img src={tinyImg.url} alt={title} />
        </div>
        <div className="card-actions">
            
        </div>
    </div>
  )
}
