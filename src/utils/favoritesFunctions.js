let favoriteNameStorage = "favoriteGifs";

export const getFavoriteGifs = () => {
    let favoriteImages = localStorage.getItem(favoriteNameStorage);
    favoriteImages = favoriteImages ? JSON.parse(favoriteImages) : [];
    return favoriteImages;
}

export const setFavoriteGifs = (favorites) => {
    localStorage.setItem(favoriteNameStorage, JSON.stringify(favorites));
}

export const isAFavoriteGif = (item) => {
    const favoriteImages = getFavoriteGifs();
    return favoriteImages.some(img=>img.id == item.id);
}

export const addFavoriteGif = (item) => {
    const favoriteImages = getFavoriteGifs();
    const isSaved = favoriteImages.some(img=>img.id==item.id);

    const newFavorites = isSaved
        ? favoriteImages.filter(img => img.id !== item.id)
        : [...favoriteImages, item];

    setFavoriteGifs(newFavorites);
    
    return !isSaved;
};