function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  this.sleep = function (minutes = 10) {
    console.log(`I'm sleeping for ${minutes}`);
  };

  this.walk = () => {
    console.log("I'm walking");
  };
}

Dog.prototype.bark = function () {
  console.log(`BARK, my name is ${this.name} and I and a ${this.breed}!`);
};

const fido = new Dog('fido', 'shepard');
console.log('fido: ', fido);

fido.walk();
fido.sleep(15);
fido.bark();
