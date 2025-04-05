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

     test('Debe de llamar al evento handleSearch si el input tiene un valor', () => { 
        const inputValue = 'Terminator';
        const handleSearch = jest.fn();
        render(<CategorySearch handleSearch={ handleSearch } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue }})
        fireEvent.submit(form)
        expect( input.value ).toBe('')
        expect( handleSearch ).toHaveBeenCalled();
        expect( handleSearch ).toHaveBeenCalledTimes(1);
        expect( handleSearch ).toHaveBeenCalledWith(inputValue);
      })
     
    test('No debe llamar al evento handleSearch si el input esta vacio', () => { 
        const inputValue = '';
        const handleSearch = jest.fn();
        render(<CategorySearch handleSearch={ handleSearch } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue }})
        fireEvent.submit(form)
        expect( input.value ).toBe('')
        expect( handleSearch ).toHaveBeenCalledTimes(0);
    })
 })