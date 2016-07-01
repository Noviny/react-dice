// newRoll falls back to a 1d20 roll if no other parameters are provided.
// It returns an object of the total and the resultsArr. The form newRoll().total
// is a common usage.
const newRoll = (dieCount = 1, dieType = 20, bonus = 0) => {
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

// Both roll and rolls create and then modify an object, which
// they return when the function is done.
exports.roll = (dieCount = 1, dieType = 20, bonus = 0) => {
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

// rolls can be used in conjunction with rolls, or by passing
// in a collection of objects like what roll returns, however we can
// also pass in our own array of dice.
exports.rolls = (rolls, bonus = 0) => {
	const dice = {
		rolls: rolls,
		lastRoll: 0,
		resultsArr: [],
		bonus: bonus,
	};
	dice.rolls.forEach(roll => {
		roll.dieCount = roll.dieCount || 1;
		roll.dieType = roll.dieType || 6;
		if (roll.bonus) dice.bonus += roll.bonus;
		roll.bonus = 0;
	});
	// get becomes a permanent method on the object
	dice.get = () => {
		dice.lastRoll = dice.bonus;
		dice.resultsArr = [];
		dice.rolls.forEach(rollObj => {
			const makeRoll = newRoll(rollObj.dieCount, rollObj.dieType, 0);
			dice.lastRoll += makeRoll.total;
			dice.resultsArr = dice.resultsArr.concat(makeRoll.resultsArr);
		})
		return dice.lastRoll;
	};
	return dice;
}

exports.newRoll = newRoll;
