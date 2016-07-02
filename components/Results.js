import React, { Component } from 'react';
import { maxResultStyle, minResultStyle } from '../constants/styles';

class Results extends Component {
	render () {
		const diceArray = this.props.diceArray;
		return (
			<span>
				results: {diceArray.map((die, i, a) => {
					var resultNumStyle = {};
					if (die.value === die.type) {
						resultNumStyle = Object.assign(resultNumStyle, maxResultStyle);
					}
					if (die.value === 1) {
						resultNumStyle = Object.assign(resultNumStyle, minResultStyle);
					}


					if (i === a.length - 1) {
						return (
							<span key={i} style={resultNumStyle}>{`${die.value}/${die.type}`}</span>
						);
					}
					return (
						<span key={i} style={resultNumStyle}>{`${die.value}/${die.type}, `}</span>
					);
				})}
			</span>
		);
	}
};

module.exports = Results;
