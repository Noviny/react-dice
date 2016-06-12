const newRoll = (dieCount, dieType, bonus) => {
	let resultsArr = []
	for (var i = 0; i < dieCount; i++) {
		resultsArr.push(Math.ceil(Math.random() * dieType));
	}
	let total = resultsArr.reduce((a, b) => a + b) + bonus;
	return {total, resultsArr};
};

const generateRoll = (dieCount, dieType, bonus) => {
	const roll = {
		dieCount: dieCount,
		dieType: dieType,
		bonus: bonus,
		lastRoll: 0,
	};

	roll.get = () => {
		const ourRoll = newRoll(roll.dieCount, roll.dieType, roll.bonus);
		roll.lastRoll = ourRoll.total;
		roll.resultsArr = ourRoll.resultsArr;
		return roll.lastRoll;
	};

	return roll;
};

exports.generateRoll = generateRoll;
exports.newRoll = newRoll;
