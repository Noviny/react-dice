import React, { Component } from 'react';

import { makeRoll } from '../diceLogic';

// TODO: Add styling, so this is easy to drop in and out.
// Have a way to display the array of results if you don't just want a total.



// const makeDie = () => {
//   const dice = logic();
//
//   const reroll = () => dice.reroll();
//
//   return {
//     dice: dice,
//     component: () -> {
//
//       return <button onClick={reroll} />
//     }
//   }
// };
//
//
// React.createClass({
//   componentWillMount() {
//     this.dice = new DieRoll.logic();
//     this.dice.onroll((newValue) => {
//       console.log(newValue);
//     })
//   }
    //
    // updateDieType (e) {
    //   this.dice.numOfSides = e.target.value
    // }
//
//
//   render() {
//
//     <DieRoll dice={this.dice} />
//   }
//
// });
//
//
//
//
// <div>{this.die.component}</div>



class DieRoll extends Component {
  constructor () {
    super();
    this.rollTheDice = this.rollTheDice.bind(this);
    this.updateValue = this.updateValue.bind(this);
  };

  componentWillMount () {
    if (props.dice) {
      this.setState({ dice: props.dice });
    } else if (props.numOfSides) {
      this.setState({ dice: makeRoll(props.numOfDice, props.numOfSides, props.modifier) });
    } else {
      this.setState({ dice: makeRoll() });
    }
  }

  rollTheDice () {
    var dice = this.state.dice;
    dice.get();
    this.setState({ dice });
  };

  updateValue (numOfDice, numOfSides, modifier) {
    var dice = this.state.dice;
    dice.numOfDice = numOfDice ? parseInt(numOfDice) : dice.numOfDice;
    dice.numOfSides = numOfSides ? parseInt(numOfSides) : dice.numOfSides;
    dice.modifier = modifier ? parseInt(modifier) : dice.modifier;
    dice.setDice();
    this.setState({ dice });
  }

  render () {
    if (!this.state.dice) return <div></div>
    var dice = this.state.dice

    return (
      <div>
        <input value={dice.numOfDice} onChange={(e) => this.updateValue(e.target.value, null, null)} type="number" />d
        <input value={dice.numOfSides} onChange={(e) => this.updateValue(null, e.target.value, null)} type="number" />
        +<input value={dice.modifier} onChange={(e) => this.updateValue(null, null, e.target.value)} type="number" />
        <button onClick={this.rollTheDice}>Roll</button>
        <span>Total: {dice.lastRoll}</span>
      </div>
    )
  }
}

module.exports = DieRoll;
