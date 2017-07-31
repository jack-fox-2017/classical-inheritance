"use strict"

class Animals{
  constructor(type, legs, habitat){
    this.type = type
    this.legs = legs || 4
    this.habitat = habitat || 'water'
  }
}

class Cats extends Animals{
  constructor(type, legs, paws, habitat){
    super(type, legs, habitat)
    this.paws = paws
    this.superPower = new SuperPower()
  }
  doCats(){
    return `${this.superPower.cats_power()}, they are the most lazy pets, Cats. They have many type, the most popular is ${this.type}. With ${this.legs} legs, and ${this.paws} paws, it suitable to life on ${this.habitat} habitats `
  }
}
class Dogs extends Animals{
  constructor(type, legs, color){
    super(type, legs)
    this.color = color
    this.superPower = new SuperPower()
  }
  doDogs(){
    return `${this.type} is one of dogs type. They have ${this.superPower.dogs_power()} superpower. With ${this.legs} legs can be run long. This type ussualy have ${this.color} color with strips pattern `
  }
}
class Flamingo extends Animals{
  constructor(type, legs, habitat, fingers){
    super(type, legs, habitat)
    this.fingers = fingers
    this.superPower = new SuperPower()
  }
  doFlamingo(){
    return `Flamingo from ${this.type} has ${this.legs} legs. It's suitable with their habitats in ${this.habitat} and ${this.fingers}. But for your info, they have an superpower to ${this.superPower.flamingos_power()}`
  }
}

class SuperPower{
  constructor(){

  }
  cats_power(){
    return "Can change to be catwoman(also Tom) with bazooka roar"
  }
  dogs_power(){
    return "Hypnotic eyes for people giving the Sausage"
  }
  flamingos_power(){
    return "Create and manipulate cloud from Ito Ito Fruits(Doflamingo :v)"
  }

}


let flamingo = new Flamingo('Chilean flamingo', 2, '', 'membran fingers')
let cats = new Cats('Red Tabby', '', 4, 'freedom castile')
let dogs = new Dogs('Bulldog', '', 'Brown')

console.log(flamingo.doFlamingo());
console.log("---------------------------------------------------");
console.log(cats.doCats());
console.log("---------------------------------------------------");
console.log(dogs.doDogs());
