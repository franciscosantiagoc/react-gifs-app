import React, { useState } from 'react'
import { addItemToHistory } from '../utils/Functions'

export const CategorySearch = ({
    setCategories,
}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChangeValue = (event) => {
        setInputValue(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault();
        let items = addItemToHistory(inputValue);
        setCategories(items);
        setInputValue('');
    }
  return (
    <form onSubmit={handleSearch}>
        <label>Agrega la categoria a buscar</label>
        <div className="form-group d-flex flex-row">
            <input type="text" name="searchCategory" value={inputValue} 
            placeholder="Ejemplo: tecnologia" onChange={handleChangeValue}/>
            <button type='submit' className='btn btn-primary'>Buscar</button>
        </div>
    </form>
  )
}
