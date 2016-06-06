exports.newRoll = (die, die2, bonus) => {

	// Setting up the base roll object we are going to use.
	// If we don't pass in any, it defaults to 1d20.
	var roll = {
		numOfDice: 1,
		numOfSides: 20,
		modifier: 0,
		dice: [],
		results: [],
	}

	if (typeof die === 'number' && newRoll.length === 1) roll.numOfSides = die;

	if (newRoll.length === 3) {
		roll.numOfDice = die;
		roll.numOfSides = die2;
		roll.modifier = bonus;
	}

	if (typeof die === 'string') {
		var parsedString = die.match(/((\d*)[dD])?(\d*)?((\+|-|\*|\/)(\d*))?/)

		if (parsedString[3] === undefined) return console.error('could not read input')

		roll.numOfDice = parsedString[2] ? parseInt(parsedString[2]) : roll.numOfDice;
		roll.numOfSides = parseInt(parsedString[3]);
		roll.operator = parsedString[5] ? parsedString[5] : null;
		roll.modifier = parseInt(parsedString[6]) ? parseInt(parsedString[6]) : 0;
	}

	for (var i = 0; i < roll.numOfDice; i++) {
		roll.dice.push(() => { return Math.ceil(Math.random() * roll.numOfSides) });
	}

	roll.actuallyRoll = () => {
		roll.results = []
		roll.dice.forEach(dieToRoll => {
			roll.results.push(dieToRoll());
		})
	}

	roll.get = () => {
		roll.actuallyRoll();
		roll.lastRoll = roll.results.reduce((a, b) => a + b) + roll.modifier
		return roll.lastRoll
	}

	return roll;
}

exports.rollDice = die => {
	var ourRoll = newRoll(die)
	return ourRoll.get()
}
