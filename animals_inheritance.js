"use strict"
class Animal {
  constructor(numLeg, blood, numHand) {
    this.legs = numLeg;
    this.blood = blood;
    this.hands = numHand;
  }
}

class Monkey extends Animal {
  constructor(numLeg, blood, numHand, tail) {
    super(numLeg, blood, numHand);
    this.tail = tail;
    this.name = `Monkey`;
    this._power = new Power(this.name)
  }
  describe() {
    console.log(`monkey have ${this.legs} legs and ${this.hands} arms, monkey is ${this.blood} blooded, monkey also have ${this.tail} tail`);
  }
}

class Eagle extends Animal {
  constructor(numLeg, blood, numHand, wings) {
    super(numLeg, blood, numHand);
    this.wings = wings;
    this.name = `Eagle`
    this._power = new Power(this.name)
  }
  describe() {
    console.log(`eagle have ${this.legs} legs and ${this.hands} arms, eagle is ${this.blood} blooded, eagle also have ${this.wings} wings`);
  }
  name() {

  }
}

class Power {
  constructor(name) {
    this.name = name
  }
  lazer() {
    console.log(`${this.name} use Lazer`);
  }
  cosmic() {
    console.log(`${this.name} get the cosmic power and seek to destroy the universe`);
  }
}

let igel = new Eagle(2, 'warm', 0, 2);
let monki = new Monkey(2, 'warm', 2, 1);

igel.describe()
monki._power.lazer()
monki.describe()
igel._power.cosmic()
