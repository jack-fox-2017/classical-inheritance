"use strict"
class Animal {
  constructor(numLegs, warmBlooded) {
    this.num_legs = numLegs;
    this.is_warm_blooded = warmBlooded;
  }
  // jmlKaki(num){
  //   return this.num_legs
  // }
}

class SuperPower {
  constructor(numLegs) {
    this.num_legs = numLegs
  }
  use_laser_vision() {
    return `This animal has ${this.num_legs} legs and use laser vision`
  }
  be_invisible() {

  }
}

class Chicken extends Animal {
  constructor(numLegs, warmBlooded) {
    super(numLegs, warmBlooded);
    this.super = new SuperPower(numLegs);
  }
  jmlKaki(num){
    this.num_legs = num
    return this.num_legs
  }
}

class Chimpanzee extends Animal {
  constructor(numLegs, warmBlooded) {
    super(numLegs, warmBlooded);
    this.super = new SuperPower(numLegs);
  }
}

class Fox extends Animal {
  constructor(numLegs, warmBlooded) {
    super(numLegs, warmBlooded);
    this.super = new SuperPower(numLegs)
  }
}

let chicken = new Chicken(2, false)
let chimp = new Chimpanzee(4, true)
let fox = new Fox(4, true)

chicken.jmlKaki(8)
console.log(chicken);
console.log(chimp);
console.log(fox);
console.log(fox.super.use_laser_vision());
