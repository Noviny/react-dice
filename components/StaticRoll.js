import React, { Component } from 'react';
import { newRoll } from '../diceLogic';

class StaticRoll extends Component {

  componentWillMount () {
    this.setState({
      total: 0,
    })
  };

  getNewTotal () {
    this.setState({
      total: newRoll(this.props.dieCount, this.props.dieType, this.props.bonus),
    });
  };

  render () {
    return (
      <span>{this.props.dieCount}d{this.props.dieType}+{this.props.bonus}<button onClick={this.getNewTotal.bind(this)}>Roll</button> Total: {this.state.total}</span>
    )
  };
};

module.exports = StaticRoll;
