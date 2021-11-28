// const outerFunction = () => {
//   let storedValue = 0;

//   // Returning a function from another function is the key to closures
//   return () => {
//     return  storedValue + 1;
//   };
// };

// // Assign the returned function to a new variable
// const newFunctionWithPermanentAccess = outerFunction();

// // Execute the returned funciton to change the value it has access to (via a closure)
// newFunctionWithPermanentAccess(); // storedValue = 1;
// newFunctionWithPermanentAccess(); // storedValue = 2;
// newFunctionWithPermanentAccess(); // storedValue = 3;

// const r = newFunctionWithPermanentAccess()
// console.log('r: ', r);

// const makeAddBy = (x) => {
//   const addBy = 0;

//   return (y) => {
//     return y + x;
//   };
// };

// const addByTwo = makeAddBy(2);
// addByTwo(100);
// addByTwo(100);
// addByTwo(100);

// let val = addByTwo(100);
// console.log('val: ', val);

// function outer() {
//     const outerVar = "Hey I am the outer Var";
//     return function inner() {
//       const innerVar = "hey I am an inner var";
//       console.log(innerVar);
//       console.log(outerVar);
//     }
//   }
// const innerVar = 'Hey I am an inner var';

// const innerFn = outer();

// innerFn()

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));

console.log('------------------------------------------');
console.log(sayHello("Rich"))


function createGame(gameName){
  let score = 0;
  return function win(){
    score ++;
    return `Your ${gameName} game score is ${score}`
  }
}
const hockeyGame = createGame('Hockey');
hockeyGame();
hockeyGame();
hockeyGame();
hockeyGame();
hockeyGame();
hockeyGame();
result = hockeyGame();

console.log('result: ', result);
console.log('result: ', result);
console.log('result: ', result);
console.log('result: ', result);
    