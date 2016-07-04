import React, { Component } from 'react';
import { inputStyle } from '../constants/styles';

class DiceDisplay extends Component {
	componentWillMount () {
		this.updateCount = this.updateCount.bind(this);
		this.updateType = this.updateType.bind(this);
	};

	updateCount (e) {
		this.props.updateDieCount(e.target.value, this.props.keyS);
	}

	updateType (e) {
		this.props.updateDieType(e.target.value, this.props.keyS);
	}

	render () {
		return (
			<span>
				<input
					type="number"
					value={this.props.dieCount}
					onChange={this.updateCount}
					style={inputStyle}
				/>
				d
				<input
					type="number"
					value={this.props.dieType}
					onChange={this.updateType}
					style={inputStyle}
				/>+ </span>
		);
	}
}

module.exports = DiceDisplay;
