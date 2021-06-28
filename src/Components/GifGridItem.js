import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( { title , url} ) => {


  //console.log({id , title , url});

    return (
        <div className="card animate__animated animate__rubberBand">
           <img src={url} alt={title} />
           <p>{title}</p>
        </div>
    )
}

GifGridItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem
