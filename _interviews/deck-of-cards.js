class Card {
  constructor(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
  }
}

generateDeck = () => {
  this.names = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  let cards = [];

  // suits
  for (let s = 0; s < this.suits.length; s++) {
    // names
    for (let n = 0; n < this.names.length; n++) {
      cards.push(new Card(n + 1, this.names[n], this.suits[s]));
    }
  }

  return cards;
};

let myDeck = generateDeck();

console.log('myDeck: ', myDeck);

function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));
    [sourceArray[j], sourceArray[i]] = [sourceArray[i], sourceArray[j]];
  }
  return sourceArray;
}

myDeck = shuffle(myDeck);
console.log('myDeck: ', myDeck);
