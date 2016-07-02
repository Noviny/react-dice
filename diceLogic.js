// newRoll falls back to a 1d20 roll if no other parameters are provided.
// It returns an object of the total and the results. The form newRoll().total
// is a common usage.
const newRoll = (dieCount = 1, dieType = 20, bonus = 0) => {
	let results = [];
	for (var i = 0; i < dieCount; i++) {
		results.push({ type: dieType, value: Math.ceil(Math.random() * dieType) });
	}
	let total = bonus;
	results.forEach(result => {
		total += result.value;
	});
	return { total, results };
};

// Both roll and rolls create and then modify an object, which
// they return when the function is done.
exports.roll = (dieCount = 1, dieType = 20, bonus = 0) => {
	const rollObj = {
		dieCount: dieCount,
		dieType: dieType,
		bonus: bonus,
		lastRoll: 0,
		results: Array.from({ length: dieCount }, (v, k) => {
			return { type: dieType, value: 0 };
		}),
	};
	rollObj.get = () => {
		const ourRoll = newRoll(rollObj.dieCount, rollObj.dieType, rollObj.bonus);
		rollObj.lastRoll = ourRoll.total;
		rollObj.results = ourRoll.results;
		return rollObj.lastRoll;
	};
	return rollObj;
};

// rolls can be used in conjunction with rolls, or by passing
// in a collection of objects like what roll returns, however we can
// also pass in our own array of dice.
exports.rolls = (rolls, bonus = 0) => {
	const dice = {
		rolls: rolls,
		lastRoll: 0,
		results: [],
		bonus: bonus,
	};
	dice.rolls.forEach(roll => {
		roll.dieCount = roll.dieCount || 1;
		roll.dieType = roll.dieType || 6;
		if (roll.bonus) dice.bonus += roll.bonus;
		delete roll.bonus;
	});
	// get becomes a permanent method on the object
	dice.get = () => {
		dice.lastRoll = dice.bonus;
		dice.results = [];
		dice.rolls.forEach(rollObj => {
			const makeRoll = newRoll(rollObj.dieCount, rollObj.dieType, 0);
			dice.lastRoll += makeRoll.total;
			dice.results = dice.results.concat(makeRoll.results);
		});
		return dice.lastRoll;
	};
	return dice;
};

exports.newRoll = newRoll;
