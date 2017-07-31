"use strict"

class Animal {
  constructor(num_legs=2, is_warm_blooded=true){
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
    this.superpower = new SuperPower() //mengakses ke dalam class
  }
}

class Monkey extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class KingKong extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class Cat extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class Dog extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(4, is_warm_blooded)
    this.superpower = new SuperPower //composition
  }
}

class SuperPower{
  constructor(){
  }

  use_laser_vision(){
    return 'Sinar merah untuk menangkal musuh'
  }

  be_invisible(){
    return 'kekuatan menghilang'
  }
}


let animal1 = new Monkey(this.num_legs)
console.log(`Hewan Monyet berkaki ${animal1.num_legs}, berdarah panas? ${animal1.is_warm_blooded}`);
console.log('Monyet mendapat kekuatan', animal1.superpower.use_laser_vision());
console.log('\n');

let animal2 = new KingKong(this.num_legs)
console.log(`Hewan Kingkong berkaki ${animal2.num_legs}, berdarah panas? ${animal2.is_warm_blooded}`);
console.log('Kingkong mendapat kekuatan', animal2.superpower.be_invisible());
console.log('\n');

let animal3 = new Cat(4)
console.log(`Hewan Kucing berkaki ${animal3.num_legs}, berdarah panas? ${animal3.is_warm_blooded}`);

let animal4 = new Dog(4, false)
console.log(`Hewan Anjing berkaki ${animal4.num_legs}, berdarah panas? ${animal4.is_warm_blooded}`);
