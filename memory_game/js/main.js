// console.log('Up and running!');

var cards = [{
        rank: 'Queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-heats.png'
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

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log('You found a match!');
    } else {
        console.log('Sorry, try again.');
    }
};

var flipCard = function(cardId) {
    console.log('User flipped a ' + cards[cardId].rank + ' of ' + cards[cardId].suit + '.');
    console.log('Image can be found here; ' + cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);

    checkForMatch();
};

flipCard(0);
flipCard(1);

