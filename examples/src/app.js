import React from 'react';
import ReactDOM from 'react-dom';
import { Dice, roll } from '../../index';

ReactDOM.render(
	<div>
		<h1>A quick demonstration of react-dice</h1>
		<div>
			<p>This is the most complete component, which is showing the array of results as well as the total on roll.</p>
			<Dice
				rolls={[roll(3, 6), roll(1, 8), roll(1, 10, 12)]}
				showResults
			/>
		</div>
		<p>You can click on any dice to toggle that dice into an editable mode.</p>
		<p>Currently adding or removing dice is not possible through the UI.</p>
		{/* <div>
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
		</div>*/}
		<div>
			<Dice rolls={[roll()]} />
		</div>
	</div>,
	document.getElementById('dice')
);
