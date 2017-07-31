"use strict"
//==================PARENT===================

class Animals {
  constructor(num_legs, warm_blood, habitat) {
    this.jumlahKaki = num_legs;
    this.darah = warm_blood;
    this.habitat = habitat || 'Darat';
  }

  numLegs() {
    if (this.jumlahKaki === 6) {
      return `enam`
    } else if (this.jumlahKaki === 9) {
      return `sembilan`
    }
  };
}

// =================CHILD=====================
class Frog extends Animals {
  constructor(num_legs, warm_blood,habitat) {
    super(num_legs, warm_blood, habitat)
    this.superpower = new SuperPower()
  }
}

class Duck extends Animals {
  constructor(num_legs, warm_blood, habitat) {
    super(num_legs, warm_blood, habitat)
    this.superpower = new SuperPower()
  }
}

// =================CLASS SUPERPOWER=====================
class SuperPower {
  set_laser_vision(){
    return 'Supervision'
  }

  be_invisible(){
    return 'Invisible'
  }

  set_fly(){
    return 'Terbangg'
  }
}

let frog = new Frog(4, true)
let duck = new Duck(2, false, 'Air')

console.log(`Frog memiliki jumlah kaki sebanyak ${frog.jumlahKaki}`);
 if (frog.darah === true) {
   console.log(`berdarah hangat`);
 } else {
   console.log(`berdarah dingin`);
 };
console.log(`habitat asli di ${frog.habitat}`);
console.log(`dan memiliki kekuatan: ${frog.superpower.set_laser_vision()} dan ${frog.superpower.set_fly()}`);
console.log(`Duck memiliki jumlah kaki sebanyak ${duck.jumlahKaki}`);
 if (duck.darah === true) {
   console.log(`berdarah hangat`);
 } else {
   console.log(`berdarah dingin`);
 };
console.log(`habitat asli di ${duck.habitat}`);
console.log(`dan memiliki kekuatan: ${duck.superpower.set_laser_vision()}`);
