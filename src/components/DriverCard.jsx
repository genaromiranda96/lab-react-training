import React from 'react';
import Rating from './Rating'

const DriveCard = (props) => {

    const { img, name, rating, car } = props;
    const { model, licensePlate } = car;

    return(
    <div className='DriveCard'> 
        <div>
            <img src={img} height='80px' width='80px' style={{ borderRadius: 150}} />
        </div>

        <div style={{textAlign: 'left'}}> 
            <h4>{name}</h4> 
            <Rating>{rating}</Rating> 
            <h4>{model} - {licensePlate}</h4> 
        </div>
    </div>    
    
    )
}

export default DriveCard;


