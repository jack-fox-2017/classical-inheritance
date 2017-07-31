"use strict"

class SuperPower {
  constructor() {

  }

  use_laser_vision() {
    return 'Mengluarkan laser. pi pi pi pi'
  }

  be_invisible(){
    return 'jurus menghilang ciattt'
  }
}

class Animal{
  constructor(num_legs,is_warm_blooded) {
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
    this.superPower = new SuperPower()
  }
}

class Frog extends Animal{
  constructor(num_legs,is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }

  kaki(){
    return this.num_legs
  }

  darah(){
    return this.is_warm_blooded
  }
}


class Ayam extends Animal {
  constructor(num_legs,is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }

  kaki(){
    return this.num_legs
  }

  darah(){
    return this.is_warm_blooded
  }
}

class Cumi extends Animal{
  constructor(num_legs,is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }

  kaki(){
    return this.num_legs
  }

  darah(){
    return this.is_warm_blooded
  }
}


var animal = new Animal(2,true)
var bangkong = new Frog(4,true)
var ayam = new Ayam(2,true)
var cumi = new Cumi(0,false)

console.log(bangkong.kaki());
console.log(bangkong.superPower.use_laser_vision());
console.log(ayam.superPower.be_invisible());
