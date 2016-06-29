const newRoll = (dieCount, dieType, bonus) => {
	let resultsArr = []
	for (var i = 0; i < dieCount; i++) {
		resultsArr.push({ type: dieType, value: Math.ceil( Math.random() * dieType) });
	}
	let total = bonus
	resultsArr.forEach(result => {
		total += result.value
	});
	return {total, resultsArr};
};

const generateRoll = (dieCount, dieType, bonus) => {
	const rollObj = {
		dieCount: dieCount,
		dieType: dieType,
		bonus: bonus,
		lastRoll: 0,
		resultsArr: Array.from({ length: dieCount }, (v, k) => {
			return { type: dieType, value: 0 };
		}),
	};

	rollObj.get = () => {
		const ourRoll = newRoll(rollObj.dieCount, rollObj.dieType, rollObj.bonus);
		rollObj.lastRoll = ourRoll.total;
		rollObj.resultsArr = ourRoll.resultsArr;
		return rollObj.lastRoll;
	};

	return rollObj;
};

// combineRolls can be used in conjunction with generate rolls, or by passing
// in a collection of objects like what generateRoll returns, however we can
// also pass in our own array of dice.

exports.combineRolls = (arrayOfRolls) => {
	const multiRollObj = {
		rolls: arrayOfRolls,
		lastRoll: 0,
		resultsArr: [],
		bonus: 0,
	};

	multiRollObj.rolls.forEach(roll => {
		multiRollObj.bonus += roll.bonus;
		roll.bonus = 0;
	});

	multiRollObj.get = () => {
		multiRollObj.lastRoll = multiRollObj.bonus;
		multiRollObj.resultsArr = [];
		multiRollObj.rolls.map(rollObj => {
			const makeRoll = newRoll(rollObj.dieCount, rollObj.dieType, 0);
			multiRollObj.lastRoll += makeRoll.total;
			multiRollObj.resultsArr = multiRollObj.resultsArr.concat(makeRoll.resultsArr);
		})
		return multiRollObj.lastRoll;
	};

	return multiRollObj;
}

exports.generateRoll = generateRoll;
exports.newRoll = newRoll;
