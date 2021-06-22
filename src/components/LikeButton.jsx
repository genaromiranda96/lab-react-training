import React, {Component} from 'react';

class LikeButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            borderColor: 'purple',
        }
    }

    handleIncrement = () => {
        const { likes, borderColor } = this.state;
        const colors = [ 'blue','green','yellow','orange','red' ]
        this.setState({
            likes: likes + 1,
            borderColor:  colors[Math.floor(Math.random() * colors.length)]
        })

    }

    render() { 

        const { likes, borderColor } = this.state;

    return(
        <button style={{paddingLeft: '20px' ,color: 'white',borderRadius: '5px', borderColor: 'silver', backgroundColor: `${borderColor}` }} 
                onClick={this.handleIncrement}>
            <p style={{fontSize: '16px'}}>  {likes} Likes</p>
        </button>    
     )
    }
}

export default LikeButton;