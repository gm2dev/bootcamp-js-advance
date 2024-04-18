// finally.. all together

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);

leo.eat(10);
snoop.play(5);

console.log(leo);
console.log(snoop);
