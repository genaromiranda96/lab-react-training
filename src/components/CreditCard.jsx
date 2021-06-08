import React from 'react';


const CreditCard = (props) => {

    let typeCard = props.type;
    let { bgColor} = props
    let numberCard = props.number
    let numberHide = numberCard.substring(12,16)

    if (typeCard === 'Visa') {
        return(
        <div className="CreditCard" style={{backgroundColor: `${bgColor}`, borderRadius: 10, color:`${props.color}` }}>
            <div className="CreditCard-img"> 
                <img height='20px' src="./img/visa.png"/>
            </div>
        
            <div className="CreditCard-num"> 
                <p><text className="CreditCard-dot-num" >.... .... .... </text>{numberHide}</p>
            </div>
        
            <div className="display"> 
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <div>
                <p class="text-l">{props.owner}</p>
            </div>
        </div> 
        )   
    } else if (typeCard === 'Master Card') {
        return( 
        <div className="CreditCard" style={{backgroundColor: `${bgColor}`, borderRadius: 10, color:`${props.color}` }}>
            <div className="CreditCard-img"> 
                <img height='20px' src="./img/master-card.svg"/>
            </div>
        
            <div className="CreditCard-num"> 
                <p><text className="CreditCard-dot-num" >.... .... .... </text>{numberHide}</p>
            </div>
        
            <div className="display"> 
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <div >
                <p className="text-l">{props.owner}</p>
            </div>
    </div> ) 
    }

}

export default CreditCard;