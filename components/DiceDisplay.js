import React, { Component } from 'react';


class DiceDisplay extends Component {

  render () {
    return (
      <span>
        <input
          type="number"
          value={this.props.dieCount}
          onChange={(e) => { this.props.updateDieCount(e.target.value, this.props.keyS) }}
          style={{ maxWidth: '2rem', textAlign: 'right', border: 'none', background: 'rgba(0, 0, 0, 0)' }}
        />
        d
        <input
          type="number"
          value={this.props.dieType}
          onChange={(e) => { this.props.updateDieType(e.target.value, this.props.keyS) }}
          style={{ maxWidth: '2rem', textAlign: 'left', border: 'none', background: 'rgba(0, 0, 0, 0)' }}
        />+ </span>
    )
  }
}

module.exports = DiceDisplay;
