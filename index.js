let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game.";
    isAlive = false;
  }

  //To Cash Out
  messageEl.textContent = message;
}

function newCard(){
  console.log("Drawing a new card from the deck!")
}
