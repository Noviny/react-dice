import { generateRoll, newRoll } from './diceLogic';
import StaticRoll from './components/StaticRoll'
import SimpleDie from './components/SimpleDie'
import standardDice from './standardDice';

exports.generateRoll = generateRoll
exports.newRoll = newRoll
exports.StaticRoll = StaticRoll
exports.SimpleDie = SimpleDie
exports.standardDice = standardDice

exports.d4 = standardDice.d4
exports.d6 = standardDice.d6
exports.d8 = standardDice.d8
exports.d10 = standardDice.d10
exports.d12 = standardDice.d12
exports.d20 = standardDice.d20
