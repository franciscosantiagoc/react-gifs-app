const {
    VITE_API_KEY,
    VITE_API_URL
} = import.meta.env;

export const getImages = async (category) => {
    let pathUrl = `${VITE_API_URL}?api_key=${VITE_API_KEY}&q=${category}`;
    const response = await fetch(pathUrl);

    if (!response.ok) {
        throw new Error('Network al realizar la consulta de ' + category);
    }
    const results = await response.json();

    let imagesResult = results.data.map(item => {
        const { id, username, title, images } = item;
        return {
            id,
            username,
            title,
            tinyImg: images.downsized_medium,
            largeImg: images.downsized_large
        }
    })

    return imagesResult;
}