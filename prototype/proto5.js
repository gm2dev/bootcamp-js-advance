// func instantiation with shared methods and object create

const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  },
};

function Animal(name, energy) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

const garfield = Animal("Garfield", 7);
const snoop = Animal("Snoop", 10);

garfield.eat(10);
snoop.play(5);

console.log(garfield);
console.log(snoop);
