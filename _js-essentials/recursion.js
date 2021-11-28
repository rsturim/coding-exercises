function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    console.log(`add ${number}`);
    return number + add(number - 1);
  }
}

const result = add(5);
console.log('------------------------------------------');
console.log('result: ', result);
