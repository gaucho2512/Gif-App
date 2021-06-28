import React, { useState } from 'react'

//comunicacion entre componentes - setCategories viene desde GifExpertApp.js (como un props)
const AddCategory = ( {setCategories} ) => {

 
const [inputValue, setInputValue] = useState('')

const handleInput = (e) => {
     
    setInputValue( e.target.value)
     
}


const handleSubmit = (e) => {
    e.preventDefault()

    //validacion
    if( inputValue.trim().length > 2 ) {
        setCategories( categ => [  inputValue, ...categ]);
        setInputValue('')
    }

    
     
}


    return (

         <form onSubmit={handleSubmit}> 
           <input
              className="form-control"
              type="text"
              placeholder="Buscar GIFS"
              value={inputValue}
              onChange={ handleInput }
            />
         </form>
   
    )
}

export default AddCategory
