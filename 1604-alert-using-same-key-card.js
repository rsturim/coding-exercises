/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const result = [];
  const hash = {};

  for (let i = 0; i < keyName.length; i++) {
    const name = keyName[i];

    let time = parseInt(keyTime[i].replace(':', ''));

    if (!hash[name]) {
      hash[name] = [time];
    } else {
      hash[name].push(time);
    }
  }

  let maxed = [];

  for (const key in hash) {
    const times = hash[key];
    const accrued = accrueHours(times);

    if (accrued >= 3) {
      maxed.push(key);
    }

    hash[key] = accrued;
  }

  console.log('hash: ', hash);

  return maxed;
};

function accrueHours(hours) {
  let j = hours.length - 2;
  let acc = 1;
  for (let i = hours.length - 1; i >= 0; i--) {
    const hour = hours[i];
    const prev = hours[j];
    if (hour - prev < 100) {
      acc = acc + 1;
    }
    j--;
  }
  return acc;
}

// const keyName = ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'];
// const keyTime = ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00'];
// Output: ["daniel"]

// const keyName = ['alice', 'alice', 'alice', 'bob', 'bob', 'bob', 'bob'];
// const keyTime = ['12:01', '12:00', '18:00', '21:00', '21:20', '21:30', '23:00'];
// Output: ["bob"]

const keyName = ["john","john","john"];
const keyTime = ["23:58","23:59","00:01"]
// Output: []

// const keyName = [
//   'leslie',
//   'leslie',
//   'leslie',
//   'clare',
//   'clare',
//   'clare',
//   'clare',
// ];
// const keyTime = ['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49'];
// Output: ["clare","leslie"]

const result = alertNames(keyName, keyTime);
console.log('result: ', result);
