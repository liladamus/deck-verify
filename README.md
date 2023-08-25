
# Deck Verification Tool

This project helps you generate a shuffled deck, a unique salt, hashes them together, and posts the salt to a private Gist. It also allows you to verify a deck and salt against a hash.

## Setup

1. Clone this repository.
2. Install the required Node.js packages:

```bash
npm install axios crypto
```

3. Create a [GitHub Personal Access Token](https://github.com/settings/tokens/new) with the `gist` scope. Replace `'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'` in the `index.js` file with your actual token.

## Usage

There are two primary commands you can run:

### 1. Generating a Deck, Salt, and Hash

To create a shuffled deck, generate a salt, hash the deck and salt together, and post the salt to a private Gist:

```bash
node index.js
```

This will give you output similar to:

```
Deck Order: [
  '10C', '6H', '4S', ... (and so on)
]
Gist Link: https://gist.github.com/yourusername/randomgistid
Hashed Deck with Salt: somehashedvalue
```

Remember to save the Deck Order and Hashed Deck with Salt. Share the Gist link with players, so they can access the salt after the game.

### 2. Verifying a Deck and Salt

To verify that a given deck and salt match a specific hash, you can use the `test-hash.js` script. For this script to work, you need to have `index.js` in the same directory.

```bash
node test-hash.js
```

You should see:

```
index.js imported as a module
The deck and salt are valid!
```

This means that the deck and salt provided in the script match the original hash, ensuring the game was fair and pre-determined.

---

I hope this README helps guide users in using the project effectively!