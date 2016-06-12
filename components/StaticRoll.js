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
      total: newRoll(this.props.dieCount, this.props.dieType, this.props.bonus).total
    });
  };

  render () {
    if (total === ( this.props.dieType * this.props.dieCount )+ this.prop.bonus) console.log('max value rolled');
    if (total === this.props.dieCount + this.prop.bonus) console.log('min value rolled');

    return (
      <span>{this.props.dieCount}d{this.props.dieType}+{this.props.bonus}<button onClick={this.getNewTotal.bind(this)}>Roll</button> Total: {this.state.total}</span>
    )
  };
};

module.exports = StaticRoll;
