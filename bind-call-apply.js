const bob = { name: 'Bob' };

// BIND
function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

// It creates a new function with its `this` set
const sayHelloToBob = sayHello.bind(bob);
sayHelloToBob(); 
// Hello, Bob!

function greetFriend(firstName, lastName) {
  console.log(`Hello, ${this.name}! My name is ${firstName} ${lastName}`);
}

// CALL
const pete = { name: 'Pete' };
greetFriend.call(pete, 'Rich', 'Sturim');
// Hello, Pete! My name is Rich Sturim

//   APPLY
const george = { name: 'George' };
greetFriend.apply(george, ['Dan', 'McCool']);
// Hello, George! My name is Dan McCool