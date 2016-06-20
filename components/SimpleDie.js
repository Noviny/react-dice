import React, { Component } from 'react';
import { generateRoll, newRoll } from '../diceLogic';
import { maxResultStyle, minResultStyle } from '../constants/styles';
import ResultsArray from './ResultsArray'

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
    dice.dieType = parseInt(newValue);
    this.setState({ dice: dice });
  };

  updateBonus (newValue) {
    var dice = this.state.dice;
    dice.bonus = parseInt(newValue);
    this.setState({ dice: dice });
  };

  rollDice () {
    var dice = this.state.dice;
    dice.get();
    this.setState({ dice: dice });
  };

  render () {
    var dice = this.state.dice;

    var totalStyle = {};
    if (dice.lastRoll === ( dice.dieType * dice.dieCount )+ dice.bonus) {
      totalStyle = Object.assign({}, totalStyle, maxResultStyle);
    }
    if (dice.lastRoll === dice.dieCount + dice.bonus) {
      totalStyle = Object.assign({}, totalStyle, minResultStyle);
    }

    return (
      <span>
        <input
          type="number"
          value={dice.dieCount}
          onChange={(e) => { this.updateDieCount(e.target.value) }}
          style={{ maxWidth: '30px', textAlign: 'center', border: 'none' }}
        />
      d
        <input
          type="number"
          value={dice.dieType}
          onChange={(e) => { this.updateDieType(e.target.value) }}
          style={{ maxWidth: '30px', textAlign: 'center', border: 'none' }}
        />
      +
        <input
          type="number"
          value={dice.bonus}
          onChange={(e) => { this.updateBonus(e.target.value) }}
          style={{ maxWidth: '30px', textAlign: 'center', border: 'none' }}
        />
        <button onClick={this.rollDice.bind(this)}>Roll</button>
        <span> - Total: <span style={totalStyle} >{dice.lastRoll}</span></span>
        {this.props.showResultsArr
          ? <ResultsArray diceArray={dice.resultsArr} />
          : null
        }
      </span>
    )
  };
};

module.exports = SimpleDie;
