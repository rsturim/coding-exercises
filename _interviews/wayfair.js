const array = [1, 2, 3, 4];

let pairs = [];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    pairs.push([array[i], array[j]]);
  }
}

console.log(pairs);

const schedule = [
  [1, 'Biology'],
  [2, 'Econ'],
  [2, 'English'],
  [1, 'Math'],
  [3, 'Econ'],
  [2, 'Math'],
  [2, 'Art'],
];

const hash = {};
for (let i = 0; i < schedule.length; i++) {
  const [id, title] = schedule[i];
  if (!hash[id]) {
    hash[id] = [title];
  } else {
    hash[id].push(title);
  }
}
console.log('hash: ', hash);
