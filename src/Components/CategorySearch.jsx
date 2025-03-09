import React, { useState } from 'react'
import { addItemToHistory } from '../utils/Functions'

export const CategorySearch = ({
    handleSearch
}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChangeValue = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.length < 1) return;
        
        handleSearch(inputValue.trim())
        setInputValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Agrega la categoria a buscar</label>
        <div className="form-group d-flex flex-row">
            <input type="text" name="searchCategory" value={inputValue} 
            placeholder="Ejemplo: tecnologia" onChange={handleChangeValue}/>
            <button type='submit' className='btn btn-primary'>Buscar</button>
        </div>
    </form>
  )
}
