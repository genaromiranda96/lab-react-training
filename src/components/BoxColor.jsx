import React from 'react';

const BoxColor = (props) => {
      
    return (
        <div className="boxcolor" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
         {props.children}
         </div> 
    )
            
    

}

export default BoxColor;