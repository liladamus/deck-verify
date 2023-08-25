const axios = require("axios");
const crypto = require("crypto");

// Function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// Function to create a deck
function createDeck() {
  const suits = ["H", "D", "C", "S"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let deck = [];

  for (let suit of suits) {
    for (let value of values) {
      deck.push(value + suit);
    }
  }

  return shuffle(deck);
}

// Function to generate a random salt
function generateSalt() {
  return crypto.randomBytes(16).toString("hex");
}

// Function to post a gist to GitHub
async function postGist(salt) {
  const token = "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"; // Replace with your GitHub Personal Access Token
  const headers = {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
  };

  const data = {
    description: "Salt for card deck",
    public: false,
    files: {
      "salt.txt": {
        content: salt,
      },
    },
  };

  try {
    const response = await axios.post("https://api.github.com/gists", data, {
      headers,
    });
    return response.data.html_url;
  } catch (error) {
    console.error("Error posting gist:", error);
  }
}

// Function to hash the deck with salt
function hashDeckWithSalt(deck, salt) {
  const hasher = crypto.createHash("sha256");
  hasher.update(deck.join("") + salt);
  return hasher.digest("hex");
}

// Function to verify deck and salt against a hash
function verifyDeckAndSalt(deck, salt, hash) {
  const computedHash = hashDeckWithSalt(deck, salt);
  return computedHash === hash;
}

// Main function to generate deck, salt, and post gist
async function main() {
  const deck = createDeck();
  const salt = generateSalt();
  const deckHash = hashDeckWithSalt(deck, salt);
  const gistLink = await postGist(salt);

  console.log("Deck Order:", deck);
  console.log("Gist Link:", gistLink);
  console.log("Hashed Deck with Salt:", deckHash);
}

if (require.main === module) {
  main();
} else {
  console.log("index.js imported as a module");
}

module.exports = {
  verifyDeckAndSalt,
};
