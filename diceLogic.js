const parseInput = (arg1, arg2, arg3) => {
	var roll;

	// The aim is to make this as modular as possible. As such, our makeRoll function
	// can take in a range of inputs. The below parse those inputs into meaningful
	// information to make a roll object with

	// The valid inputs are a single number to specify number of sides on a die,
	// all three inputs in the order they are normally presented in games (number
	// of dice, die type, bonus to the roll), and a string, for which we use Regex
	// to make real values out of.
	if (typeof arg1 === 'number' && !arg2) makeDice(arg1, 0, 0);
	else if (arg1 && arg2 && arg3) {
		roll = makeDice(arg2, arg1, arg3);
	} else if (typeof arg1 === 'string') {
		// This regex parses a bunch of things for us, assuming the first argument
		// is a string. The base string structure is '3d6+5'. Note that the opening
		// number as well as the closing bonus are optional, so 'd6' is valid. Also,
		// it accounts for whitespace between characters. Capital 'D' is also accepted.
		let parsedString = arg1.match(/(\d*)\s*[dD](\d+)\s*((\+|-|\*|\/)\s*(\d+))?/);

		if (parsedString[3] === undefined) return console.error('could not read input')

		let numOfDice = parsedString[1] ? parseInt(parsedString[1]) : 1;
		let numOfSides = parseInt(parsedString[2]);
		let operator = parsedString[4] ? parsedString[4] : null;
		let modifier = parseInt(parsedString[5]) ? parseInt(parsedString[5]) : 0;
		roll = newRoll(numOfSides, numOfDice, modifier);
	} else roll = newRoll(20, 1, 0)

	roll.setDice();
	return roll;
}

const rollDice = (dieCount, dieType, bonus) => {
	let results = []
	for (var i = 0; i < dieCount; i++) {
		results.push(Math.ceil(Math.random() * roll.dieType));
	}
	return results;
}



const newRoll = (dieCount, dieType, bonus) => {
	var roll = {
		dieCount: dieCount,
		dieType: dieType,
		bonus: bonus,
		lastRoll: 0
	}


	roll.getRolls = () => {
		roll.results = rollDice(roll.dieCount, roll.dieType, roll.bonus);
	}

	roll.get = () => {
		roll.getRolls();
		roll.lastRoll = roll.results.reduce((a, b) => a + b) + roll.modifier;
		return roll.lastRoll;
	}
	return roll;
}


exports.makeRoll = parseInput;

exports.rollDice = (dieType, numOfDice, bonus) => {
	var ourRoll = newRoll(dieType, numOfDice, bonus);
	ourRoll.setDice();
	return ourRoll.get();
};
