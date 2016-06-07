import { newRoll } from './diceLogic';


exports.d4 = (bonus) => { return newRoll(1, 4, 0) + (bonus || 0) };
exports.d6 = (bonus) => { return newRoll(1, 6, 0) + (bonus || 0) };
exports.d8 = (bonus) => { return newRoll(1, 8, 0) + (bonus || 0) };
exports.d10 = (bonus) => { return newRoll(1, 10, 0) + (bonus || 0) };
exports.d12 = (bonus) => { return newRoll(1, 12, 0) + (bonus || 0) };
exports.d20 = (bonus) => { return newRoll(1, 20, 0) + (bonus || 0) };
