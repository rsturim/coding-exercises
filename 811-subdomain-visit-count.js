var subdomainVisits = function (cpdomains) {
  const result = [];
  const hash = {};

  for (let i = 0; i < cpdomains.length; i++) {
    const domain = cpdomains[i];

    let [count, url] = domain.split(' ');
    count = parseInt(count);

    // Do whole domains first
    hash[url] = !hash[url] ? count : hash[url] + count;

    // Now count the url parts
    for (let i = 0; i < url.length; i++) {
      if (url[i] === '.') {
        const d = url.substring(i + 1); // take everything to the right
        hash[d] = !hash[d] ? count : hash[d] + count;
      }
    }
  }

  for (let key in hash) {
    result.push(`${hash[key]} ${key}`);
  }
  return result;
};

const cpdomains = ['9001 discuss.leetcode.com'];
/*
Output: [
    '9001 leetcode.com', 
    '9001 discuss.leetcode.com', 
    '9001 com'
];
*/

// const cpdomains = [
//   '900 google.mail.com',
//   '50 yahoo.com',
//   '1 intel.mail.com',
//   '5 wiki.org',
// ];
/* 
Output: [
  '901 mail.com',
  '50 yahoo.com',
  '5 wiki.org',
  '5 org',
  '951 com',
  '1 intel.mail.com',
  '900 google.mail.com',
];
*/

const result = subdomainVisits(cpdomains);

console.log('result: ', result);
