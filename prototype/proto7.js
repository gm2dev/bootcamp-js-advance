// Object definition comparission

function Animal(name, energy) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}
