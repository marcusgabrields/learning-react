import React, { Component } from 'react';


export default class Counter extends Component {

  state = {
    number: this.props.initialNumber,
  }

  plusOne = () => {
    this.setState({ number: this.state.number + 1 })
  }

  minusOne = () => {
    this.setState({ number: this.state.number - 1 })
  }

  render() {
    return (
      <div>
        <div>Number: { this.state.number }</div>
        <button onClick={this.plusOne }>++</button>
        <button onClick={ this.minusOne }>--</button>
      </div>
    )
  }

  // <button onClick={() =>  this.plusOne() }>++</button>

  // constructor(props) {
  //   super(props);
  //   this.plusOne = this.plusOne.bind(this);
  // }
}
