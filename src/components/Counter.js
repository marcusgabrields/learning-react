import React, { Component } from 'react';


export default class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.plusOne = this.plusOne.bind(this);
  // }

  plusOne = () => {
    this.props.number++;
  }

  render() {
    return (
      <div>
        <div>Number: { this.props.number }</div>
        <button onClick={this.plusOne }>++</button>
        {/* <button onClick={() =>  this.plusOne() }>++</button> */}
        <button>--</button>
      </div>
    )
  }
}
