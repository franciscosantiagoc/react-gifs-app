import { getImages } from "../../Services/GifServices"

describe('Pruebas servicio getImages', () => { 
    test('Debe de retornar un arreglo de imagenes', async () => { 
        const images = await getImages('One punch');
        expect( images[0] ).toEqual({
            id: expect.any(String),
            username: expect.any(String),
            title: expect.any(String),
            tinyImg: expect.any(String),
            largeImg: expect.any(String),
        })
     })
 })