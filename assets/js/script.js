let deck = [];
let playerHand = [];
let dealerHand = [];
let card;
let playerTotal = 0;


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

// Hit/Stand Buttons

function hit() {

  let newCard = selectRandomCard();
  playerHand.push(newCard);

  let cardValue = newCard;
  let imageUrl = "assets/images/cards/" + cardValue + ".png";
  document.getElementById(
    "player-cards"
  ).innerHTML += `<img src="${imageUrl}" alt="${cardValue}">`;

  playerTotal += cardValues[newCard];

  console.log(playerHand);
  console.log(playerTotal);
}

let hitButton = document.getElementById("hit-button");
hitButton.addEventListener("click", hit);

function stand() {

}

let standButton = document.getElementById("stand-button");


// Calculate playerTotal
let cardValues = {
  "2c": 2,
  "2d": 2,
  "2h": 2,
  "2s": 2,
  "3c": 3,
  "3d": 3,
  "3h": 3,
  "3s": 3,
  "4c": 4,
  "4d": 4,
  "4h": 4,
  "4s": 4,
  "5c": 5,
  "5d": 5,
  "5h": 5,
  "5s": 5,
  "6c": 6,
  "6d": 6,
  "6h": 6,
  "6s": 6,
  "7c": 7,
  "7d": 7,
  "7h": 7,
  "7s": 7,
  "8c": 8,
  "8d": 8,
  "8h": 8,
  "8s": 8,
  "9c": 9,
  "9d": 9,
  "9h": 9,
  "9s": 9,
  "10c": 10,
  "10d": 10,
  "10h": 10,
  "10s": 10,
  "Jc": 10,
  "Jd": 10,
  "Jh": 10,
  "Js": 10,
  "Qc": 10,
  "Qd": 10,
  "Qh": 10,
  "Qs": 10,
  "Kc": 10,
  "Kd": 10,
  "Kh": 10,
  "Ks": 10,
  "Ac": 11,
  "Ad": 11,
  "Ah": 11,
  "As": 11
}

let playerCardValue = cardValues[playerHand[0]] + cardValues[playerHand[1]];
playerTotal += playerCardValue;

console.log(playerTotal);




// function cardValue(deck1) {
//   for(card in playerHand) {
//     let value = card.splice(0, -1);
//     if(value === "A") {
//       return playerTotal + 11 <= 21 ? 11 : 1;
//     } else if(["K", "Q", "J"].includes(value)) {
//       return 10;
//       } else {
//         return parseInt(value)
//       } 
//   }
//   cardValue();


//   // const rank = card.slice(0, -1); // Remove the suit from the card value
//   // if (rank === "A") {
//   //    // Handle Ace (choose 1 or 11 based on total)
//   //  return playerTotal + 11 <= 21 ? 11 : 1;
//   // } else if (["K", "Q", "J"].includes(rank)) {
//   //  return 10; // Face cards have a value of 10
//   //   } else {
//   //   return parseInt(rank); // Numeric cards have their face value
//   //   }
// }

// New Game Button

// let newGame = document.getElementById("new-game-button");
// newGame.addEventListener("click", dealCards);