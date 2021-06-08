import React from 'react';

const Rating = (props) => {

    const averageRaiting = Math.round(props.children) 
    // 1.5 = 2 = repeat 2 times ★★ and (5-2=3) repeat 3 times = ☆☆☆ = ★★☆☆☆
    
    return (
        <div>
          {'★'.repeat(averageRaiting)}
          {'☆'.repeat(5 - averageRaiting)}
        </div>
      );

}

export default Rating;