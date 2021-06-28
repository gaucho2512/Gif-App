import React ,{ Fragment} from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {

    const {data:images ,loading} = useFetchGifs(category)



    return (
        <Fragment>
            <hr/>
             <h3 className="category">{category}</h3>

           {loading && <p className="animate__animated animate__flash">Loading</p>}
            
         <div className="card-grid"> 
           
            {
                   images.map( img => 
                       <GifGridItem 
                       {...img }
                      key={img}

                       />  
                  )
               }
           
        </div>
 
        </Fragment>
    )
}

export default GifGrid
