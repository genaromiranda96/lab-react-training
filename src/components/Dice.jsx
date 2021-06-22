import React, {Component} from 'react';

class Dice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            random: '/img/dice-empty.png',
        };
        this.togglebutton = this.togglebutton.bind(this);

    }


    
    togglebutton() {
        const Allpictures = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png',
                             '/img/dice4.png', '/img/dice5.png', '/img/dice6.png'];

    
        this.setState({
            random: Allpictures[Math.floor(Math.random() * Allpictures.length)],
        })
    }

    render() { 
        const { random } = this.state;


    return(
        <div class='my-3' >
                <div style={{cursor: 'pointer'}} onClick={this.togglebutton}>
                <img style={{height: '150px'}} src={random} />
                </div>
        </div>
     )
    }
}

export default Dice;