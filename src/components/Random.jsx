import React from 'react';

const Random = (props) => {

    let minN = props.min;
    let maxN = props.max;
    let randomNumber = Math.floor(Math.random() * maxN) + minN;
    
    return  (
        <p className="langclass">Random value between ${minN} and ${maxN}: ${randomNumber}</p>
        )
}

export default Random;