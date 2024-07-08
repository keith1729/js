

let deck = [];

function createDeck() {
const suits = ["♣︎", "♦︎", "♥︎", "♠︎"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
for(let x = 0; x < suits.length; x++) {
    for(let y = 0; y < values.length; y++) {
        deck.push(values[y] + suits[x]);
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

let deck1 = createDeck();
shuffleDeck(deck1);

function selectRandomCard() {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck1[randomIndex];
    deck1.splice(randomIndex, 1);
    return card;
}

function dealCards() {
    let playerHand = [selectRandomCard(), selectRandomCard()];
    let dealerHand = [selectRandomCard(), selectRandomCard()];
    console.log(playerHand);
    console.log(dealerHand);
}

let cardImages = {
    for(i = 0; i < deck1.length; i++) {
        let cardValue = deck1[i]
        let imageUrl = "assets/images/cards/" + cardValue + ".png"
    }
    "cardValue": "imageUrl",
}
console.log(cardImages);

