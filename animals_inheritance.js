"use strict"
class SuperPower {
  constructor(nama) {
    this.nama = nama
  }
  use_laser_vision(){
    return console.log('cut it cut laser by '+this.nama);
  }

  be_invisible(){
    return console.log('kamu tidak bisa melihat '+this.nama);
  }
}

class Animal {
  constructor(name, num_legs =4, is_warm_blooded =true) {
    this.name =name
    this.num_legs= num_legs
    this.is_warm_blooded = is_warm_blooded
    this.superpower = new SuperPower(name)
  }

}

module.exports = Animal;

// reptiles, amphibians, and fish,
