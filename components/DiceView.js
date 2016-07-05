import React, { Component } from 'react';

class DiceView extends Component {
	componentWillMount () {
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.props.handleClick(this.props.keyS);
	}

	render () {
		return (
			<span onClick={this.handleClick}>{`${this.props.dieCount}d${this.props.dieType} + `}</span>
		);
	}
}

module.exports = DiceView;
