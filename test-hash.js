const { verifyDeckAndSalt } = require("./index");

// test for pre-generated deck on this address: https://gist.github.com/iamsoorena/6d5640fd31bd9156892d9ec999d776ee
// start of the game players receive the deck hash
// cece6931bf419a9d0d55bf6f932bcf958954cf5fafe89def3f6d9036dd8470e2
// at the end of the game players receive the deck and salt

const deck = [
    '10C', '6H', '4S', '10D', '10H', '6S',  '9C',
    '8C',  '7S', '4C', 'KD',  '8H',  '5S',  '3D',
    '8S',  'QC', '9S', '8D',  '9D',  '4H',  '2H',
    'QH',  '5C', 'AD', '3C',  '3S',  'KS',  'JH',
    '7H',  'JC', '3H', 'QS',  '5H',  '10S', '2S',
    '7D',  '2C', '9H', 'QD',  '6C',  'JD',  '6D',
    'AS',  '7C', 'KH', 'AH',  '4D',  '2D',  'KC',
    'AC',  'JS', '5D'
  ]
;

const salt = "b0631d515f364377d55dcafd07f8c5c8"; // The salt revealed after the game
const hash = "cece6931bf419a9d0d55bf6f932bcf958954cf5fafe89def3f6d9036dd8470e2"; // The original hash (from `hashDeckWithSalt` function)

const isValid = verifyDeckAndSalt(deck, salt, hash);
console.log(
  isValid ? "The deck and salt are valid!" : "The deck or salt is not valid!",
);
