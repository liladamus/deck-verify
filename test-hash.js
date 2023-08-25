#!/usr/bin/env node

const { verifyDeckAndSalt } = require("./index");

// test for pre-generated deck on this address: https://gist.github.com/liladamus/c69b532648d79fec0b974062066c3887
// start of the game players receive the deck hash
// 000b0f128bb7a08c7b9ac46801d1758465213c4c36236fad0aff8545a3e2f157
// at the end of the game players receive the deck and salt

const deck = [
      'KS', '2H',  '3H', '7D', 'KD', '7S',  'JH',
      '5C', '5H',  'AC', 'QS', 'QH', '10S', '4S',
      '8S', 'KC',  '9S', '3S', '5D', 'QC',  '7H',
      '8C', '10C', '4C', '6C', '2S', '2D',  '3D',
      '3C', '10D', '7C', 'QD', 'JC', '6D',  '9H',
      '5S', '9C',  'AD', '4D', '9D', 'KH',  '6S',
      '6H', '10H', 'AS', 'JD', '8D', 'AH',  '2C',
      'JS', '4H',  '8H'
  ]

;

const salt = "36e11988b496b37cf3aed60d4c7e19e6"; // The salt revealed after the game
const hash = "000b0f128bb7a08c7b9ac46801d1758465213c4c36236fad0aff8545a3e2f157"; // The original hash (from `hashDeckWithSalt` function)

const isValid = verifyDeckAndSalt(deck, salt, hash);
console.log(
  isValid ? "The deck and salt are valid!" : "The deck or salt is not valid!",
);
