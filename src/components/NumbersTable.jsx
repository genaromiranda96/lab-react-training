import React, { Component } from 'react';

class NumbersTable extends Component {


  getList() {
    let numberList = []
    for (let n = 1; n <= this.props.limit; n++) {
      let style = {
        backgroundColor: n % 2 == 0 ? 'red' : 'white',
      }
      numberList.push(<li style={style}>{n}</li>)
    }
    return numberList
  }
  render() {
    return (
      <ul className="numbers">
        {this.getList()}
      </ul>
    );
  }
}

export default NumbersTable;
