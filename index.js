import { generateRoll, newRoll } from './diceLogic';
import StaticRoll from './components/StaticRoll'
import SimpleDie from './components/SimpleDie'
import standardDice, { d4, d6, d8, d10, d12, d20 } from './standardDice';

exports.generateRoll = generateRoll
exports.newRoll = newRoll
exports.StaticRoll = StaticRoll
exports.SimpleDie = SimpleDie
exports.standardDice = standardDice

exports.d4 = d4
exports.d6 = d6
exports.d8 = d8
exports.d10 = d10
exports.d12 = d12
exports.d20 = d20
