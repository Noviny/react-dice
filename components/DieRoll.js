import React, { Component, PropTypes } from 'react';

import { newRoll, rollDice } from './logic';

// TODO: Add checking on for this.props.fixed to make die numbers unchangeable
// Add styling, so this is easy to drop in and out.
// Have a way to display the array of results if you don't just want a total.


class DieRoll extends Component {
  componentWillMount () {
    if (this.props.dice) {
      this.setState({
        dice: this.props.dice,
      });
    } else if (this.props.numOfSides) {
      this.setState({
        dice: newRoll(this.props.numOfDice, this.props.numOfSides, this.props.bonus),
      })
    } else {
      this.setState({
        dice: newRoll(),
      })
    }
  };

  rollTheDice () {
    dice = this.state.dice;
    dice.get();
    this.setState({ dice });
  };

  updateValue (numOfDice, numOfSides, bonus) {
    dice = this.state.dice;
    dice.numOfDice = numOfDice ? numOfDice : dice.numOfDice;
    dice.numOfSides = numOfSides ? numOfSides : dice.numOfSides;
    dice.bonus = bonus ? bonus : dice.bonus;
    this.setState({ dice });
  }

  render () {
    dice = this.state.dice

    return (
      <div>
        <input value={dice.numOfDice} onChange={(e) => this.updateValue(e.target.value, null, null)} />
        <input value={dice.numOfSides} onChange={(e) => this.updateValue(null, e.target.value, null)} />
         + <input value={dice.bonus} onChange={(e) => this.updateValue(null, null, e.target.value)} />
        <button onClick={this.rollTheDice}>Roll</button>
        <span>Total: {dice.total}</span>
      </div>
    )
  }
}

module.exports = DieRoll;
