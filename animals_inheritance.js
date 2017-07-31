"use strict"
class Animal{
  constructor(leg = 2, warm_blood,name){
    this._leg = leg;
    this._blood = warm_blood
    this._name = name
    this._superpower = new SuperPower()
  }
}

class Frog extends Animal{
  constructor(leg, warm_blood, name, type){
    super(leg, warm_blood, name)
    this._type = type
  }

}

class Bat extends Animal{
  constructor(leg, warm_blood, name, special){
    super(leg, warm_blood, name)
    this._special = special

  }
}

class Chimpanze extends Animal{
  constructor(leg, warm_blood, name){
    super(leg, warm_blood, name)
  }
}

class Fox extends Animal{
  constructor(leg, warm_blood,name){
    super(leg, warm_blood,name)
  }
}
//
// class Chicken extends Animal{
//   constructor(leg, warm_blood){
//     super(leg, warm_blood)
//   }
// }

class SuperPower {
  constructor(){

  }
  rocket_dash(){
  return 'Rocket DASH !!'
  }
}

let animal = new Fox(4, 'warm', 'fox')
let unggas = new Bat(2, 'warm', 'Kelelawar', 'flying')

console.log(`${unggas._name}, a ${unggas._special} Expert`  )
console.log(`${animal._name} is ${animal._leg}`)
console.log(`${animal._name} ready for ${animal._superpower.rocket_dash()}`);
