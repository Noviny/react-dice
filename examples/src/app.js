import React from 'react';
import ReactDOM from 'react-dom';
import { Dice, roll } from '../../index';

ReactDOM.render(
	<div>
		<h1>A quick demonstration of react-dice</h1>
		<div>
			<h2></h2>
			<Dice
				rolls={[roll(3, 6), roll(1, 8), roll(1, 10, 12)]}
				showResults
			/>
		</div>
		<div>
			<Dice
				rolls={[
					{ dieCount: 2, dieType: 6, bonus: 0 },
					{ dieCount: 3, dieType: 8, bonus: 5 },
					{ dieCount: 1, dieType: 10, bonus: 3 },
				]}
				bonus={6}
			/>
		</div>
		<div>
			<Dice
				rolls={[
					{ dieCount: 2, dieType: 6 },
					{ dieCount: 3, dieType: 8 },
					{ dieCount: 1, dieType: 10 },
				]}
			/>
		</div>
		<div>
			<Dice
				rolls={[
					{ dieCount: 2 },
					{ dieType: 8 },
					{},
				]}
			/>
		</div>
		<div>
			<Dice rolls={[roll()]} />
		</div>
	</div>,
	document.getElementById('dice')
);
