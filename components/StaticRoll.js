import React, { Component } from 'react';
import { rollDice } from '../diceLogic';

class StaticRoll extends Component {

  componentWillMount () {
    this.setState({
      total: 0,
    })
    this.getNewTotal = this.getNewTotal.bind(this);
  };

  getNewTotal () {
    this.setState({
      total: rollDice(this.props.dieNum, this.props.dieType, this.props.bonus),
    });
  };

  render () {
    return (
      <span>{this.props.dieNum}d{this.props.dieType}+{this.props.bonus}<button onClick={this.getNewTotal.bind(this)}>Roll</button> Total: {this.state.total}</span>
    )
  };
};

module.exports = StaticRoll;
