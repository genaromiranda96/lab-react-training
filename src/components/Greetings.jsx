import React from 'react';


const Greetings = (props) => {

        if(props.lang ==='de') {
            return <p className="langclass">Hallo {props.children}</p>
        } else if(props.lang ==='fr') {
            return <p className="langclass">Bonjour {props.children}</p> 
        } 

}

export default Greetings;