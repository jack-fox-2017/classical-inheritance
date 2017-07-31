"use strict"

class Animal {
  constructor(){
    this.num_legs = 2
    this.is_warm_blood = false
    this.Power = new Power()
  }
}

class Kuda extends Animal {
  constructor(){
    super();
    this.is_warm_blood = true
  }
}

class Sapi extends Animal {
  constructor(){
    super();
    this.num_legs = 4
  }
}

class Power {
  constructor(){

  }
  blood(){
    console.log('I am blood bender! I can control your blood!');
  }
}


let kuda = new Kuda()
let sapi = new Sapi()
console.log(`Apakah kuda termasuk Warm Blood? ${kuda.is_warm_blood}`);
console.log(`Apakah sapi berkaki 2? ${sapi.num_legs}`);
console.log(`Apakah sapi berkaki 2? ${sapi.is_warm_blood}`);
