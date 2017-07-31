"use strict"
class Animal {
  constructor(num_legs) {
    this.num_legs = num_legs;

  }
  warna(color){
    this.color = color
    return `Binatang memiliki ${this.num_legs} kaki dan warna ${this.color}`
  }
}
class Cat extends Animal {
  constructor(num_legs, feed, name) {
    super(num_legs);
    this.feed = feed;
    this.binatang = name
    this.superpower = new SuperPower("berubah jadi Singa");// composition

  }
  ket(){
    return `Kucing hewan berkaki ${this.num_legs} dan memakan ${this.feed}`
  }
}

class Fox extends Animal {
  constructor(num_legs, feed, name) {
    super(num_legs)
    this.feed = feed;
    this.binatang = name
    this.superpower = new SuperPower("berubah jadi Kyubi");// composition

  }
  ket(){
    return `Rubah hewab berkaki ${this.num_legs} dan memakan ${this.feed}`
  }
}

class SuperPower {
  constructor(skill){
    this.skill = skill;
  }
  beTheKing(){
    return `${kucing.binatang} juga memiliki kekuatan yang bisa ${this.skill}`
  }
  beBiju(){
    return `${rubah.binatang} juga memiliki kekuatan yang bisa ${this.skill}`
  }

}
let kucing = new Cat(4, 'ikan', "Kucing");
let rubah = new Fox(4, 'daging', "Rubah");


console.log(kucing.warna('Belang'));
console.log(kucing.ket());
console.log(kucing.superpower.beTheKing());
console.log("========================");
// console.log(rubah.warna("orange"));
console.log(rubah.ket());
console.log(rubah.superpower.beBiju());
