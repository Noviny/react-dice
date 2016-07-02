import React, { Component } from 'react';
import { inputStyle } from '../constants/styles';

class DiceDisplay extends Component {
	render () {
		return (
			<span>
				<input
					type="number"
					value={this.props.dieCount}
					onChange={(e) => { this.props.updateDieCount(e.target.value, this.props.keyS) }}
					style={inputStyle}
				/>
				d
				<input
					type="number"
					value={this.props.dieType}
					onChange={(e) => { this.props.updateDieType(e.target.value, this.props.keyS) }}
					style={inputStyle}
				/>+ </span>
		)
	}
}

module.exports = DiceDisplay;
