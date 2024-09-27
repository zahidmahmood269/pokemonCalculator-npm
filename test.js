const { calculateStat, calculateAllStats, NATURE_MODIFIERS } = require('./index');

console.log('Testing calculateStat...');
console.log(calculateStat(100, 31, 252, 50, 'adamant')); // Non-HP stat
console.log(calculateStat(100, 31, 252, 50, 'adamant', true)); // HP stat

console.log('\nTesting calculateAllStats...');
const charizard = {
  baseStats: { hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 }
};
const ivs = { hp: 31, attack: 31, defense: 31, spAttack: 31, spDefense: 31, speed: 31 };
const evs = { hp: 0, attack: 252, defense: 0, spAttack: 4, spDefense: 0, speed: 252 };
console.log(calculateAllStats(charizard, 50, 'adamant', ivs, evs));

console.log('\nNature Modifiers:');
console.log(NATURE_MODIFIERS);