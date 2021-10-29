var arr1 = "john".split('');
console.log('arr1: ', arr1);
console.log('------------------------------------------');
var arr2 = arr1.reverse();
console.log('arr2: ', arr2);
console.log('------------------------------------------');
var arr3 = "jones".split('');
console.log('arr3: ', arr3);
console.log('------------------------------------------');

arr2.push(arr3);
console.log('arr2: ', arr2);
console.log('------------------------------------------');

let foo = arr1.slice(-1);
console.log('arr1: ', foo);


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('animals: ', animals);
animals.slice(0, 2);
console.log('animals.slice(0, 2): ', animals.slice(0, 2));
console.log('animals: ', animals);

console.log('animals.slice(-1): ', animals.slice(-1));


// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));