// SETS
const list = new Set();
list.add('Rich');
list.add('Bob');
list.add('Doug');
list.add('Rich');

console.log(list.has('Doug'));
console.log(list);
console.log(list);

const line = list.values();
console.log(line.next().value);
console.log(line);
list.add('Mom');
console.log(line);
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().done);
