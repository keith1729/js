let deck = [];

function createDeck() {
const suits = ["C", "D", "H", "S"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

for(let x = 0; x < suits.length; x++) {
    for(let y = 0; y < values.length; y++) {
        deck.push(values[y] + "-" + suits[x]);
    }
}
return deck;
}

function shuffleDeck(deck) {
for(let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    [deck[i], deck[j]] = [deck[j], deck[i]];
}
}

let deckShuffled = createDeck();
shuffleDeck(deckShuffled);
console.log(deckShuffled);





