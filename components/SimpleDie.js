import React, { Component } from 'react';
import { makeRoll } from '../diceLogic';

class SimpleDie extends Component {

  componentWillMount () {
    this.setState({ dice: makeRoll() })
  };

  render () {
    return null;
  };
};

module.exports = DieRoll;
