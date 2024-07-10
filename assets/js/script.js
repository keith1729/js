let deck;
let hidden;
let playerHand = [];
let dealerHand = [];
let card;
let playerTotal = 0;
let dealerTotal = 0;

window.onload = function() {
  createDeck();
  // shuffleDeck(deck);
}


// Create a deck of cards
function createDeck() {
  const suits = ["c", "d", "h", "s"]; // "clubs", "diamonds", "hearts", "spades"
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
  for (let x = 0; x < suits.length; x++) {
    for (let y = 0; y < values.length; y++) {
      deck.push(values[y] + suits[x]);
    }
  }
  return deck;
}


function shuffleDeck() {
  let deck = createDeck();
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  // console.log(deck);
}

deck = createDeck();
shuffleDeck(deck);
// console.log(deck);

// function selectRandomCard() {
//   let randomIndex = Math.floor(Math.random() * deck1.length);
//   let card = deck1[randomIndex];
//   deck1.splice(randomIndex, 1);
//   return card;
// }

// // Deal Cards
// function dealCards() {
//   hidden = deck1.pop();
//   playerHand = [selectRandomCard(), selectRandomCard()];
//   dealerHand = [selectRandomCard()];
// }


// function cardImages() {
//   dealCards();
//   console.log(playerHand);
//   console.log(dealerHand);
//   for (i = 0; i < playerHand.length; i++) {
//     let cardValue = playerHand[i];
//     let imageUrl = "assets/images/cards/" + cardValue + ".png";
//     document.getElementById(
//       "player-cards"
//     ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;
//   }
//   for (i = 0; i < dealerHand.length; i++) {
//     let cardValue = dealerHand[i];
//     let imageUrl = "assets/images/cards/" + cardValue + ".png";
//     document.getElementById(
//       "dealer-cards"
//     ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;
//   }
// }
// cardImages();

// // Hit Button

// function hit() {

//   let newCard = selectRandomCard();
//   playerHand.push(newCard);

//   let cardValue = newCard;
//   let imageUrl = "assets/images/cards/" + cardValue + ".png";
//   document.getElementById(
//     "player-cards"
//   ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;

//   playerTotal += cardValues[newCard];

//   console.log(playerHand);
//   console.log(playerTotal);
//   document.getElementById("player-total").innerHTML = `Player: ${playerTotal}`
// }

// let hitButton = document.getElementById("hit-button");
// hitButton.addEventListener("click", hit);

// // Stand Button

// function stand() {

// }

// let standButton = document.getElementById("stand-button");


// // Calculate Card Totals
// let cardValues = {
//   "2c": 2,
//   "2d": 2,
//   "2h": 2,
//   "2s": 2,
//   "3c": 3,
//   "3d": 3,
//   "3h": 3,
//   "3s": 3,
//   "4c": 4,
//   "4d": 4,
//   "4h": 4,
//   "4s": 4,
//   "5c": 5,
//   "5d": 5,
//   "5h": 5,
//   "5s": 5,
//   "6c": 6,
//   "6d": 6,
//   "6h": 6,
//   "6s": 6,
//   "7c": 7,
//   "7d": 7,
//   "7h": 7,
//   "7s": 7,
//   "8c": 8,
//   "8d": 8,
//   "8h": 8,
//   "8s": 8,
//   "9c": 9,
//   "9d": 9,
//   "9h": 9,
//   "9s": 9,
//   "10c": 10,
//   "10d": 10,
//   "10h": 10,
//   "10s": 10,
//   "Jc": 10,
//   "Jd": 10,
//   "Jh": 10,
//   "Js": 10,
//   "Qc": 10,
//   "Qd": 10,
//   "Qh": 10,
//   "Qs": 10,
//   "Kc": 10,
//   "Kd": 10,
//   "Kh": 10,
//   "Ks": 10,
//   "Ac": 11,
//   "Ad": 11,
//   "Ah": 11,
//   "As": 11
// }

// // Player Total
// let playerCardsValue = cardValues[playerHand[0]] + cardValues[playerHand[1]];
// playerTotal += playerCardsValue;

// console.log(playerTotal);
// document.getElementById("player-total").innerHTML = `Player: ${playerTotal}`

// // Dealer Total
// let dealerCardsValue = cardValues[dealerHand[0]] + cardValues[dealerHand[1]];
// dealerTotal += dealerCardsValue;

// console.log(dealerTotal);
// document.getElementById("dealer-total").innerHTML = `Dealer: ${dealerTotal}`

// // New Game Button

// function newGame() {

  

  
  

//   console.log("Hello World!");
// }

// let newGameButton = document.getElementById("new-game-button");
// newGameButton.addEventListener("click", newGame);


// // function newGame() {
// //   createDeck()
// //   shuffleDeck(deck);
// //   dealCards();  
// // }
// // let startNewGame = document.getElementById("new-game-button");
// // startNewGame.addEventListener("click", newGame);

// // let newGame = document.getElementById("new-game-button");
// // newGame.addEventListener("click", dealCards);