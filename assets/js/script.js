let deck = [];
let playerHand = [];
let dealerHand = [];
let card;

let standButton = document.getElementById("stand-button");

function createDeck() {
  const suits = ["clubs", "diamonds", "hearts", "spades"];
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
  for (let x = 0; x < suits.length; x++) {
    for (let y = 0; y < values.length; y++) {
      deck.push(values[y] + suits[x]);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
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
  playerHand = [selectRandomCard(), selectRandomCard()];
  dealerHand = [selectRandomCard(), selectRandomCard()];
  //   console.log(playerHand);
  //   console.log(dealerHand);
}

function cardImages() {
  dealCards();
  console.log(playerHand);
  console.log(dealerHand);
  for (i = 0; i < playerHand.length; i++) {
    let cardValue = playerHand[i];
    let imageUrl = "assets/images/cards/" + cardValue + ".png";
    document.getElementById(
      "player-cards"
    ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;
  }
  for (i = 0; i < dealerHand.length; i++) {
    let cardValue = dealerHand[i];
    let imageUrl = "assets/images/cards/" + cardValue + ".png";
    document.getElementById(
      "dealer-cards"
    ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;
  }
}
cardImages();

// Hit/Stand buttons



function hit() {

  playerHand = [selectRandomCard()];
  
  console.log(playerHand);

  for (i = 0; i < playerHand.length; i++) {
    let cardValue = playerHand[i];
    let imageUrl = "assets/images/cards/" + cardValue + ".png";
    document.getElementById(
      "player-cards"
    ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;
  }
}

let hitButton = document.getElementById("hit-button");
hitButton.addEventListener("click", hit);
