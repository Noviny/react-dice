import React, { Component } from 'react';
import { combineRolls } from '../diceLogic';
import { maxResultStyle, minResultStyle, inputStyle } from '../constants/styles';
import ResultsArray from './ResultsArray'
import DiceDisplay from './DiceDisplay'

class Dice extends Component {
  componentWillMount () {
    this.setState({
      dice: combineRolls(this.props.rollsArray)
    });
    this.updateDieCount = this.updateDieCount.bind(this)
    this.updateDieType = this.updateDieType.bind(this)
    this.updateBonus = this.updateBonus.bind(this)
  };

  updateDieCount (newValue, i) {
    const dice = this.state.dice;
    dice.rolls[i].dieCount = parseInt(newValue);
    this.setState({ dice });
  };

  updateDieType (newValue, i) {
    const dice = this.state.dice;
    dice.rolls[i].dieType = parseInt(newValue);
    this.setState({ dice });
  };

  updateBonus (newValue) {
    var dice = this.state.dice;
    dice.bonus = parseInt(newValue);
    this.setState({ dice });
  };

  rollDice () {
    var dice = this.state.dice;
    dice.get();
    this.setState({
      dice,
      editRoll: -1
    });
  };

  render () {
    const dice = this.state.dice

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
        {dice.rolls.map((rollObj, i) => {
          if (this.state.editRoll !== i) {
            return (
              <span key={i} onClick={() => {this.setState({ editRoll: i })}}>{`${rollObj.dieCount}d${rollObj.dieType} + `}</span>
            )
          }
          return <DiceDisplay
            dieCount={rollObj.dieCount}
            dieType={rollObj.dieType}
            updateDieCount={this.updateDieCount}
            updateDieType={this.updateDieType}
            key={i}
            keyS={i}
          />
        })}
        <input
          type="number"
          value={dice.bonus}
          onChange={(e) => { this.updateBonus(e.target.value) }}
          style={inputStyle}
        />
        <button onClick={this.rollDice.bind(this)}>Roll</button> Total: {dice.lastRoll}
        <br/>
        {this.props.showResultsArr
          ? <ResultsArray diceArray={dice.resultsArr} />
        : null
        }
      </div>
    )
  }
}

module.exports = Dice
