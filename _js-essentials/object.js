const person = {
  name: 'John Doe',
  age: 25,
  address: {
      street: "123 Cupcake Lane",
      city: "Boston",
      state: "MA"
  }
};

// let rich = { ...person };
// let rich = Object.assign({}, person);

let rich = JSON.parse(JSON.stringify(person));


rich.name = 'Rich';
rich.age = 55;
rich.address.street = "123 Guinea Rd"
rich.address.city = "Charlotte"
rich.address.state = "VT"


console.log('person: ', person);
console.log('rich: ', rich);
console.log('------------------------------------------');


for (const key in rich) {
    if (rich.hasOwnProperty(key)) {
        const element = rich[key];
        console.log('element: ', element);
    }
}

for (const key in rich) {
    console.log('key: ', key);
}


const arr = [1,2,3,4,5]
for (const key in arr) {
    console.log('key: ', key);
}
for (const val of arr) {
    console.log('val: ', val);
}


console.log('------------------------------------------');
let pets = new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}
console.log('------------------------------------------');
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

