import React, { Component } from 'react';
import { generateRoll, newRoll } from '../diceLogic';
import { maxResultStyle, minResultStyle } from '../constants/styles';
import ResultsArray from './ResultsArray';
import DiceDisplay from './DiceDisplay';

class SimpleDie extends Component {

  componentWillMount () {
    this.setState({
      dice: generateRoll(
        this.props.dieCount,
        this.props.dieType,
        this.props.bonus
      )
    })

    this.updateDieCount = this.updateDieCount.bind(this);
    this.updateDieType = this.updateDieType.bind(this);
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
      <div
        className='dieDisplay'
        style={{
          border: '1px solid #cccccc',
          background: '#e6e6e6',
          padding: '1px',
          paddingLeft: '5px',
          paddingRight: '5px',
          display: 'inline-block',
        }}
      >
        <DiceDisplay
          dieCount={dice.dieCount}
          dieType={dice.dieType}
          updateDieCount={this.updateDieCount}
          updateDieType={this.updateDieType}
        />
        <input
          type="number"
          value={dice.bonus}
          onChange={(e) => { this.updateBonus(e.target.value) }}
          style={{ maxWidth: '2rem', textAlign: 'center', border: 'none', background: 'rgba(0, 0, 0, 0)' }}
        />
        <button onClick={this.rollDice.bind(this)}>Roll</button>
        <span> - Total: <span style={totalStyle} >{dice.lastRoll}</span></span>
        {this.props.showResultsArr
          ? <ResultsArray diceArray={dice.resultsArr} />
          : null
        }
      </div>
    )
  };
};

module.exports = SimpleDie;
