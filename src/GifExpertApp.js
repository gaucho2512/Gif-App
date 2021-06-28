import React, { Fragment, useState } from 'react'
import AddCategory from './Components/AddCategory'
import Footer from './Components/Footer'
import GifGrid from './Components/GifGrid'






 const GifExpertApp = () => {

   

   const [categories, setCategories] = useState(['X-men'])

   //funcion del boton para agregar un nuevo personaje
  // const handleAdd = () => {

      // setCategories( [...categories , 'x-men'])

       //para que aparezca primero
       //setCategories( [ 'x-men' , ... categories , ])

       //otra forma de hacerlo
      // setCategories( categ => [...categ , 'x-men'])
  // }
  
    return (

        <Fragment>

            
            <h2 className="titulo">Gif App</h2>
            
            <hr/>
            <AddCategory setCategories={ setCategories } />
        

      <ol> 
            {
                categories.map( category => 

                  <GifGrid
                  category={category}
                  key={category}

                  />
                )
            }
      </ol>

      <Footer/>
        </Fragment>
    )
}

export default GifExpertApp
