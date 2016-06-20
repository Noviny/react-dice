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

exports.generateRoll = generateRoll;
exports.newRoll = newRoll;
