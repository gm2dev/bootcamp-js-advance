// functional instantiation

// Which is the problem with the following code?
function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  animal.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };

  return animal;
}

const garfield = Animal("Garfield", 10);
const felix = Animal("Felix", 7);

console.log(garfield);
console.log(felix);
