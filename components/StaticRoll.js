import React, { Component } from 'react';
import { newRoll } from '../diceLogic';
import { maxResultStyle, minResultStyle } from '../constants/styles';
import ResultsArray from './ResultsArray';

class StaticRoll extends Component {

  componentWillMount () {
    this.setState({
      total: 0,
      resultsArr: Array.from({ length: this.props.dieCount }, (v, k) => {
  			return { type: this.props.dieType, value: 0 };
  		}),
    })
  };

  getNewResults () {
    const results = newRoll(this.props.dieCount, this.props.dieType, this.props.bonus)
    this.setState({
      total: results.total,
      resultsArr: results.resultsArr
    });
  };

  render () {
    var totalStyle = {};
    if (this.state.total === ( this.props.dieType * this.props.dieCount )+ this.props.bonus) {
      totalStyle = Object.assign({}, totalStyle, maxResultStyle);
    }
    if (this.state.total === this.props.dieCount + this.props.bonus) {
      totalStyle = Object.assign({}, totalStyle, minResultStyle);
    };

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
        {this.props.dieCount}d{this.props.dieType}+{this.props.bonus}
        <button onClick={this.getNewResults.bind(this)}>Roll</button> Total: <span style={totalStyle} >{this.state.total}</span>
        <br />
        {this.props.showResultsArr
          ? <ResultsArray diceArray={this.state.resultsArr} />
          : null
        }
      </div>
    )
  };
};

module.exports = StaticRoll;
