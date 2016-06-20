import React, { Component } from 'react';
import { generateRoll, newRoll, combineRolls } from '../diceLogic';
import { maxResultStyle, minResultStyle } from '../constants/styles';
import ResultsArray from './ResultsArray'

class MismatchedDice extends Component {

  componentWillMount () {
    this.setState({
      multiRollObj: combineRolls(this.props.rollsArray)
    });
  };




  updateDieCount (newValue, i) {
    const multiRollObj = this.state.multiRollObj;
    multiRollObj.rolls[i].dieCount = parseInt(newValue);
    this.setState({ multiRollObj });
  };

  updateDieType (newValue, i) {
    const multiRollObj = this.state.multiRollObj;
    multiRollObj.rolls[i].dieType = parseInt(newValue);
    this.setState({ multiRollObj });
  };

  updateBonus (newValue) {
    // TODO: Hook this up maybe
    var multiRollObj = this.state.multiRollObj;
    multiRollObj.bonus = parseInt(newValue);
    this.setState({ multiRollObj });
  };





  rollDice () {
    var multiRollObj = this.state.multiRollObj;
    multiRollObj.get();
    this.setState({ multiRollObj });
  };

  render () {
    const multiRollObj = this.state.multiRollObj
    var totalBonus = 0

    return (
      <span>
        {multiRollObj.rolls.map((rollObj, i) => {
          totalBonus += rollObj.bonus;
          return <span key={i} >
            <input
              type="number"
              value={rollObj.dieCount}
              onChange={(e) => { this.updateDieCount(e.target.value, i) }}
              style={{ maxWidth: '30px', textAlign: 'center', border: 'none' }}
            />
            d
            <input
              type="number"
              value={rollObj.dieType}
              onChange={(e) => { this.updateDieType(e.target.value, i) }}
              style={{ maxWidth: '30px', textAlign: 'center', border: 'none' }}
            /> + </span>
        })}
        {totalBonus}
        <button onClick={this.rollDice.bind(this)}>Roll</button> Total: {multiRollObj.lastRoll}
        {this.props.showResultsArr
          ? <ResultsArray diceArray={multiRollObj.resultsArr} />
          : null
        }
      </span>
    )
  }
}

module.exports = MismatchedDice
