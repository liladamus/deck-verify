# Onchain Poker Bot

A tool to generate and verify decks for onchain poker.

## Installation

To install the Onchain Poker Bot, you need to have [Node.js and npm](https://nodejs.org/) installed on your system.

Once you have them set up, run the following command:

```bash
npm install -g onchain-poker-bot
```

This will install the tool globally on your system, allowing you to access the `generate-deck` and `verify-deck` commands from any terminal or command prompt.

## Usage

### 1. Generating a Deck

To create a shuffled deck, generate a salt, hash the deck and salt together, and post the salt to a private Gist, run:

```bash
generate-deck
```

This command will provide output similar to:

```
Deck Order: [
  '10C', '6H', '4S', ... (and so on)
]
Gist Link: https://gist.github.com/yourusername/randomgistid
Hashed Deck with Salt: somehashedvalue
```

Save the Deck Order and Hashed Deck with Salt. Share the Gist link with players, so they can access the salt after the game.

### 2. Verifying a Deck

To verify that a given deck and salt match a specific hash, use:

```bash
verify-deck
```

On successful verification, you will see:

```
The deck and salt are valid!
```

This confirmation means that the provided deck and salt match the original hash, ensuring the game was fair and pre-determined.

## License

MIT

## Contributing

Contributions are welcome! Please open an issue if you have any feature ideas or find any bugs.