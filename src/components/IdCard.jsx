import React from 'react';

const IdCard = (props) => {
    return(
    <div id="id-card"> 
        <div>
            <img src={props.picture} height='180px' alt={props.firstName} />
        </div>

        <div style={{textAlign: 'left'}}> 
            <h3><span>First Name:</span>{props.firstName}</h3> 
            <h3><span>Last Name:</span>{props.lastName}</h3> 
            <h3><span>Gender:</span>{props.gender}</h3> 
            <h3><span>Height:</span>{props.height}</h3> 
            <h3><span>Birth:</span>{props.birth}</h3> 
        </div>
    </div>    
    
    )
}

export default IdCard;