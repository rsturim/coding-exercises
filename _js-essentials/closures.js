function calculateEms(pixels) {
  const referenceSize = 16;

  return function () {
    return pixels / 16;
  };
}

const getSmallEms = calculateEms(12);
const getMediumEms = calculateEms(16);
const getLargeEms = calculateEms(18);
const getXlargeEms = calculateEms(24);

console.log('getSmallEms: ', getSmallEms());
console.log('getMediumEms: ', getMediumEms());
console.log('getLargeEms: ', getLargeEms());
console.log('getXlargeEms: ', getXlargeEms());
