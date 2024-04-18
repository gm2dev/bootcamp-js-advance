// ES6 CLASS SYNTAX

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
}

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);

leo.eat(10);
snoop.play(5);

console.log(leo);
console.log(snoop);
