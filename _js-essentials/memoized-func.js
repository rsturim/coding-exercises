function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    console.log('------------------------------------------');
    if (num in cache) {
      console.log(`${num} from cache!`);
      return cache[num];
    } else {
      console.log(`${num} calculating now!`);
      cache[num] = num + 256;
      return cache[num];
    }
  };
}

var memoizedFunc = memoizedAddTo256();
console.log('Call 1: memoizedFunc(20): ', memoizedFunc(20)); // Normal return
console.log('Call 2: memoizedFunc(20): ', memoizedFunc(20)); // Cached return
