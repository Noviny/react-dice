const rollDice = (dieCount, dieType) => {
	let results = []
	for (var i = 0; i < dieCount; i++) {
		results.push(Math.ceil(Math.random() * dieType));
	}
	return results;
}

const getTotal = (results, bonus) => {
	return results.reduce((a, b) => a + b) + bonus;
};

const newRoll = (dieCount, dieType, bonus) => {
	let results = rollDice(dieCount, dieType);
	return getTotal(results, bonus);
};

const generateRoll = (dieCount, dieType, bonus) => {
	return {
		dieCount: dieCount,
		dieType: dieType,
		bonus: bonus,
		lastRoll: 0,
	};
};

exports.generateRoll = generateRoll;
exports.newRoll = newRoll;
exports.rollDice = rollDice
