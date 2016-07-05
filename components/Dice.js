import React, { Component } from 'react';
import { rolls } from '../diceLogic';
import { inputStyle, maxResultStyle, minResultStyle } from '../constants/styles';
import Results from './Results';
import EditDice from './EditDice';
import DiceView from './DiceView';

class Dice extends Component {
	componentWillMount () {
		if (this.props.dice) {
			this.setState({
				dice: rolls(this.props.dice.rolls, this.props.dice.bonus),
			});
		} else {
			this.setState({
				dice: rolls(this.props.rolls, this.props.bonus),
			});
		}
		this.updateDieCount = this.updateDieCount.bind(this);
		this.updateDieType = this.updateDieType.bind(this);
		this.updateBonus = this.updateBonus.bind(this);
		this.rollDice = this.rollDice.bind(this);
		this.handleClick = this.handleClick.bind(this);
	};

	updateDieCount (newValue, i) {
		const dice = this.state.dice;
		dice.rolls[i].dieCount = parseInt(newValue);
		this.setState({ dice });
	};

	updateDieType (newValue, i) {
		const dice = this.state.dice;
		dice.rolls[i].dieType = parseInt(newValue);
		this.setState({ dice });
	};

	// selectDie (i) {
	// 	console.log(i);
	// 	this.setState({ editRoll: i });
	// }

	updateBonus (e) {
		var dice = this.state.dice;
		dice.bonus = parseInt(e.target.value);
		this.setState({ dice });
	};

	rollDice () {
		var dice = this.state.dice;
		dice.get();
		this.setState({
			dice,
			editRoll: -1,
		});
	};

	handleClick (i) {
		this.setState({ editRoll: i });
	};

	render () {
		const dice = this.state.dice;
		var resultStyle = {};

		if (dice.lastRoll === dice.rolls.length + dice.bonus) {
			resultStyle = Object.assign(resultStyle, maxResultStyle);
		}
		if (dice.lastRoll === 1 + dice.bonus) {
			resultStyle = Object.assign(resultStyle, minResultStyle);
		}

		return (
			<div
				className="dieDisplay"
				style={{
					border: '1px solid #cccccc',
					background: '#e6e6e6',
					padding: '1px',
					paddingLeft: '5px',
					paddingRight: '5px',
					display: 'inline-block',
				}}
			>
				{dice.rolls.map((rollObj, i) => {
					if (this.state.editRoll !== i) {
						return (
							<DiceView
								dieCount={rollObj.dieCount}
								dieType={rollObj.dieType}
								handleClick={this.handleClick}
								key={i}
								keyS={i}
							/>
						);
					}
					return (
						<EditDice
							dieCount={rollObj.dieCount}
							dieType={rollObj.dieType}
							updateDieCount={this.updateDieCount}
							updateDieType={this.updateDieType}
							key={i}
							keyS={i}
						/>
					);
				})}
				<input
					type="number"
					value={dice.bonus}
					onChange={this.updateBonus}
					style={inputStyle}
				/>
				<button onClick={this.rollDice}>Roll</button> Total: <span style={resultStyle} >{dice.lastRoll}</span>
				<br/>
				{this.props.showResults
					? <Results diceArray={dice.results} />
					: null
				}
			</div>
		);
	}
}

module.exports = Dice;
