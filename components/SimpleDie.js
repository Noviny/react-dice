import React, { Component } from 'react';
import { generateRoll, newRoll } from '../diceLogic';

class SimpleDie extends Component {

  componentWillMount () {
    this.setState({
      dice: generateRoll(
        this.props.dieCount,
        this.props.dieType,
        this.props.bonus
      )
    })
  };

  updateDieCount (newValue) {
    var dice = this.state.dice;
    dice.dieCount = parseInt(newValue);
    this.setState({ dice: dice });
  };

  updateDieType (newValue) {
    var dice = this.state.dice;
    dice.dieCount = parseInt(newValue);
    this.setState({ dice: dice });
  };

  updateBonus (newValue) {
    var dice = this.state.dice;
    dice.dieCount = parseInt(newValue);
    this.setState({ dice: dice });
  };

  rollDice () {
    var dice = this.state.dice;
    dice.lastRoll = newRoll(dice.dieCount, dice.dieType, dice.bonus);
    this.setState({ dice: dice });
  };

  render () {
    var dice = this.state.dice;

    return (
      <span>
        <input type="number" value ={dice.dieCount} onChange={(e) => { this.updateDieCount(e.target.value) }} />
        <input type="number" value ={dice.dieType} onChange={(e) => { this.updateDieType(e.target.value) }} />
        <input type="number" value ={dice.bonus} onChange={(e) => { this.updateBonus(e.target.value) }} />
        <button onClick={this.rollDice.bind(this)}>Roll</button>
        Total: {dice.lastRoll}
      </span>
    )
  };
};

module.exports = SimpleDie;
