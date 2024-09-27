const NATURE_MODIFIERS = {
    hardy: { attack: 1, defense: 1, spAttack: 1, spDefense: 1, speed: 1 },
    lonely: { attack: 1.1, defense: 0.9, spAttack: 1, spDefense: 1, speed: 1 },
    brave: { attack: 1.1, defense: 1, spAttack: 1, spDefense: 1, speed: 0.9 },
    adamant: { attack: 1.1, defense: 1, spAttack: 0.9, spDefense: 1, speed: 1 },
    naughty: { attack: 1.1, defense: 1, spAttack: 1, spDefense: 0.9, speed: 1 },
    bold: { attack: 0.9, defense: 1.1, spAttack: 1, spDefense: 1, speed: 1 },
    // ... (other natures)
  };
  
  function calculateStat(base, iv, ev, level, nature, isHP = false) {
    if (isHP) {
      return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10;
    }
    const statValue = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5;
    return Math.floor(statValue * (NATURE_MODIFIERS[nature][getStatName(isHP)] || 1));
  }
  
  function getStatName(isHP) {
    return isHP ? 'hp' : 'attack';  // Simplified for brevity
  }
  
  function calculateAllStats(pokemon, level, nature, ivs, evs) {
    return {
      hp: calculateStat(pokemon.baseStats.hp, ivs.hp, evs.hp, level, nature, true),
      attack: calculateStat(pokemon.baseStats.attack, ivs.attack, evs.attack, level, nature),
      defense: calculateStat(pokemon.baseStats.defense, ivs.defense, evs.defense, level, nature),
      spAttack: calculateStat(pokemon.baseStats.spAttack, ivs.spAttack, evs.spAttack, level, nature),
      spDefense: calculateStat(pokemon.baseStats.spDefense, ivs.spDefense, evs.spDefense, level, nature),
      speed: calculateStat(pokemon.baseStats.speed, ivs.speed, evs.speed, level, nature)
    };
  }
  
  module.exports = {
    calculateStat,
    calculateAllStats,
    NATURE_MODIFIERS
  };