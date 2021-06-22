import React, {Component} from 'react';

class ClickablePicture extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.togglebutton = this.togglebutton.bind(this);

    }

    togglebutton() {
        const { show } = this.state;
        this.setState({
            show: !show,
        })
    }

    render() { 
        let { imgClicked, img } = this.props;
        const { show } = this.state;


    return(
        <div class='my-3' >
                <div style={{cursor: 'pointer'}} onClick={this.togglebutton}>
                {show === false ? <img src={img}/>: <img src={imgClicked}/> }
                </div>
        </div>
     )
    }
}

export default ClickablePicture;