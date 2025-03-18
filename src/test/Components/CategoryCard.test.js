import { render, within } from "@testing-library/react"
import { CategoryCard } from "../../Components/CategoryCard";

describe('Pruebas en CategoryCard', () => { 
    const title = 'Simpsons';
    const tinyImage = 'https://test.tiny';
    const largeImage = 'https://test.large';

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(<CategoryCard title={title} tinyImg={tinyImage} largeImg={largeImage}/>)
        expect(container).toMatchSnapshot()
     })

    test('should first', () => { 
        const { container } = render(<CategoryCard title={title} tinyImg={tinyImage} />)
        const {src, alt} = within(container).getByRole('img');
        expect(src).toBe(tinyImage+'/');
        expect(alt).toBe(title);
        expect(container.querySelector('.card-title').textContent).toBe(title);
     })
 })