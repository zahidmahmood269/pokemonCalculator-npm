# Pokémon Stat Calculator

A comprehensive Node.js package for calculating Pokémon stats. This package provides accurate calculations for all stats (HP, Attack, Defense, Special Attack, Special Defense, and Speed) based on a Pokémon's base stats, Individual Values (IVs), Effort Values (EVs), level, and nature.

## Installation

```bash
npm install pokemon-stat-calculator
```

## Usage

```javascript
const { calculateStat, calculateAllStats, NATURE_MODIFIERS } = require('pokemon-stat-calculator');

// Calculate a single stat
const attack = calculateStat(100, 31, 252, 50, 'adamant');
console.log('Attack:', attack);

// Calculate all stats for a Pokémon
const charizard = {
  baseStats: { hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 }
};
const ivs = { hp: 31, attack: 31, defense: 31, spAttack: 31, spDefense: 31, speed: 31 };
const evs = { hp: 0, attack: 252, defense: 0, spAttack: 4, spDefense: 0, speed: 252 };
const stats = calculateAllStats(charizard, 50, 'adamant', ivs, evs);
console.log('Charizard stats:', stats);
```

## API

### calculateStat(base, iv, ev, level, nature, isHP = false)

Calculates a single stat value.

### calculateAllStats(pokemon, level, nature, ivs, evs)

Calculates all six stats for a given Pokémon.

### NATURE_MODIFIERS

An object containing the stat modifiers for each nature.

## More Information

For more detailed Pokémon calculators and battle strategies, visit [https://pokemontypecalculator.org/](https://pokemontypecalculator.org/).

## License

This project is licensed under the MIT License.