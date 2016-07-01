import React, { Component } from 'react';
import { maxResultStyle, minResultStyle } from '../constants/styles';

class Results extends Component {
  render () {
    const diceArray = this.props.diceArray;
    return (
      <span>
        results: {diceArray.map((die, i, a) => {
          var resultNumStyle = {};
          var resultNumStyle = (die.value === die.type) ?
          Object.assign({}, resultNumStyle, maxResultStyle) :
          resultNumStyle;
          var resultNumStyle = (die.value === 1) ?
          Object.assign({}, resultNumStyle, minResultStyle) :
          resultNumStyle;


          if (i === a.length -1) {
            return <span key={i} style={resultNumStyle}>{`${die.value}/${die.type}`}</span>
          }
          return <span key={i} style={resultNumStyle}>{`${die.value}/${die.type}, `}</span>
        })}
      </span>
    )
  }
};

module.exports = Results
