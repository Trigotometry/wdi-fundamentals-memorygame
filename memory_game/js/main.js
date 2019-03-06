var cards = [{
        rank: 'Queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'Queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'King',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'King',
        suit: 'diamonds',
        cardImage: 'images/king-of-hearts.png'
    }
];

var cardsInPlay = [];

var createBoard = function() {
    for (var i = 0; i < cards.length; i += 1) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    };
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    // console.log('User flipped a ' + cards[cardId].rank + ' of ' + cards[cardId].suit + '.');
    // console.log('Image can be found here; ' + cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
};

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log('You found a match!');
    } else {
        console.log('Sorry, try again.');
    }
};

createBoard();