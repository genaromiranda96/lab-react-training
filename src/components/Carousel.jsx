import React, {Component} from 'react';

class Carousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            indexImgs: 0,
        };
    }


    togglebutton(index) {
        const { indexImgs } = this.state;
        const length = this.props.imgs.length
        this.setState({
            indexImgs: (indexImgs + index + length) % length,
        })
    }

    render() { 
        const { indexImgs } = this.state;


    return(
        <div class='my-3' >
                <button onClick={() => this.togglebutton(-1)}>Left</button>
                <img src={this.props.imgs[indexImgs]} />
                <button onClick={() => this.togglebutton(1)}>Rigth</button>
        </div>
     )
    }
}

export default Carousel;