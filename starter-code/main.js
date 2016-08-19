console.log("JS file is connected to HTML! Woo!")

var cards = ["king", "king", "queen", "queen"]
var cardsInPlay = []
var x = []

function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById('results').textContent = "Kings!"
	} else
		document.getElementsByClassName('card').textContent = "Flip"
		cardsInPlay = [];
	
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

function flip() {
	this.textContent = (this.getAttribute('data-card'));
	x.push(this.getAttribute('data-card'));
}

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.textContent = 'Flip'
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards)
	newCard.addEventListener('click', flip)
	document.getElementById('game-board').appendChild(newCard);
}

//for (var i = 0; i< cards.length; i++) {
  // this will set the card's 'data-card' to be the element of the array
  // data- attributes are meant to store data about an element that is not
  // tied to a style.
  // i.e. "king"
 // cardElement.setAttribute('data-card', cards[i]);
//}
//for (var i=0; i<cards.length; i++) {

  // when a card is clicked the function isTwoCards will be executed
  //  cardElement.addEventListener('click', isTwoCards)

//}
};
createBoard();

// var newCard = document.createElement('div');
// newCard.className = 'card';
// document.getElementById('game-board').appendChild(newCard);


// if (cardOne === cardTwo) {
// alert('You found a match!');
// } else if (cardThree === cardFour) {
// alert('You found a match!');
// } else if (cardOne === cardThree) {
// alert('Sorry, try again.');
// } else if (cardTwo === cardFour) {
// alert('Sorry, try again.');
// } else  
// alert('Sorry, try again.');
