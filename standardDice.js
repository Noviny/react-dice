import { newRoll } from './diceLogic';


exports.d4 = (bonus) => {
  if (!bonus) var bonus = 0
  return newRoll(1, 4, bonus).total
};
exports.d6 = (bonus) => {
  if (!bonus) var bonus = 0
  return newRoll(1, 6, bonus).total
};
exports.d8 = (bonus) => {
  if (!bonus) var bonus = 0
  return newRoll(1, 8, bonus).total
};
exports.d10 = (bonus) => {
  if (!bonus) var bonus = 0
  return newRoll(1, 10, bonus).total
};
exports.d12 = (bonus) => {
  if (!bonus) var bonus = 0
  return newRoll(1, 12, bonus).total
};
exports.d20 = (bonus) => {
  if (!bonus) var bonus = 0
  return newRoll(1, 20, bonus).total
};
