import React, { Component } from 'react';
import { newRoll } from '../diceLogic';
import { maxResultStyle, minResultStyle } from '../constants/styles';

class StaticRoll extends Component {

  componentWillMount () {
    this.setState({
      total: 0,
      resultsArr: Array.from({ length: this.props.dieCount }, (v, k) => 0),
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
      <span>
        {this.props.dieCount}d{this.props.dieType}+{this.props.bonus}
        <button onClick={this.getNewResults.bind(this)}>Roll</button> Total: <span style={totalStyle} >{this.state.total}</span>
        <br />
        {this.props.showResultsArr ?
          this.state.resultsArr.map((result, i, a) => {
            var resultNumStyle = {};
            var resultNumStyle = (result === this.props.dieType) ?
              Object.assign({}, resultNumStyle, maxResultStyle) :
              resultNumStyle;
            var resultNumStyle = (result === 1) ?
              Object.assign({}, resultNumStyle, minResultStyle) :
              resultNumStyle;

            if (i === a.length -1) {
              return <span key={i} style={resultNumStyle}>{`${result}/${this.props.dieType}`}</span>
            }
            return <span key={i} style={resultNumStyle} >{`${result}/${this.props.dieType}, `}</span>
          })
          : null
        }
      </span>
    )
  };
};

module.exports = StaticRoll;
