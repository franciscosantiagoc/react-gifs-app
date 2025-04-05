import { fireEvent, render, screen } from "@testing-library/react"
import { CategorySearch } from "../../Components/CategorySearch"

describe('Pruebas en category search', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<CategorySearch handleSearch={()=>{}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Test value'}})
        expect(input.value).toBe('Test value')
        //screen.debug()
     })
 })