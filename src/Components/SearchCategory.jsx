import React from 'react'

export const SearchCategory = () => {
  return (
    <div>
        <label>Agrega la categoria a buscar</label>
        <div className="form-group d-flex flex-row">
            <input type="text" name="searchCategory" placeholder="Ejemplo: tecnologia" />
            <button className='btn btn-primary'>Buscar</button>
        </div>
    </div>
  )
}
