const intArray = [];
let i = 0;
while (i < 10) {
  intArray[i] = i;
  i++;
}

console.log('intArray: ', intArray);

const length = intArray.length;
for (let i = 1; i < intArray.length - 1; i++) {
  // Shift each element one position to the left
  intArray[i - 1] = intArray[i];
}





console.log('intArray: ', intArray);
