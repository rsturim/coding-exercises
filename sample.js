// let array = [1, 2, 3];

// // reversed array
// for (let i = array.length - 1; i >= 0; i--) {
//   const item = array[i];
//   console.log('item: ', item);
// }

// console.log('------------------------------------------');

// for (let i = 0; i < array.length; i++) {
//     const item = array[i];    
//     console.log('item: ', item);
// }

// console.log('------------------------------------------');

// for (const item of array) {
//     console.log('item: ', item);
// }



// console.log('------------------------------------------');

// const animals = [{id: 1, name: 'cat'}, {id:2, name: 'dog'}];

// for (const item of animals) {
//     console.log('item: ', item);    
// }
// console.log('------------------------------------------');
// for (const idx in array) {
//     const item = array[idx]
//     console.log('item: ', item);
// }


// let arr = [1,2,3,4,5];
// console.log('arr: ', arr);

// let popped = arr.pop();
// console.log('popped: ', popped);
// console.log('arr: ', arr);

let parens = "{{[[]]}}";

for (const p of parens) {
    console.log('p: ', p);
}

for (let i = 0; i < parens.length; i++) {
    const item = parens[i];    
    console.log('item: ', item);
    console.log('------------------------------------------');
}


var foo = [1,2,3,4];

console.log('foo.indexOf(2): ', foo.indexOf(2));