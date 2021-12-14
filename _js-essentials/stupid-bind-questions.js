const company = {
  _name: 'ABC Corp',
  _address: '123 Cupcake Lane',
  
  getaddress() {
    return `The address of ${this._name} is ${this._address}`;
  },
  logData(worth, numEmployees) {
    return `${this._name} is valued at $${worth} and has ${numEmployees} employees.`;
  },
};

// dumb
const result = company.getaddress;
console.log('result: ', result()); // won't work  --> The address of undefined is undefined

// dumber
const result2 = company.getaddress.bind(company); // --> The address of ABC Corp is 123 Cupcake Lane
console.log('result2: ', result2());

// okay
console.log('result3: ', company.getaddress()); // --> The address of ABC Corp is 123 Cupcake Lane

console.log('------------------------------------------');

const AppleCompany = {
  _name: 'Apple',
  _address: 'Cupertino, CA',
};

const logAppleAddress = company.getaddress.bind(AppleCompany);
console.log('logAppleAddress: ', logAppleAddress());



const logAppleDetailsCall = company.logData.call(AppleCompany, "1 billion dollars", "50K");
console.log('logAppleDetailsCall: ', logAppleDetailsCall);


const TeslaCompany = {
    _name: 'Tesla ',
    _address: 'Austin, TX',
  };
  

const logTeslaDetailsApply = company.logData.apply(AppleCompany, ["9 billion dollars", "190K"]);
console.log('logTeslaDetailsApply: ', logTeslaDetailsApply);
