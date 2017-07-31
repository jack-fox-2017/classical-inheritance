const Animal = require('./animals_inheritance')

class Frog extends Animal {
  constructor(num_legs, bloodWarmness) {
    super('Frog',num_legs, bloodWarmness)// mesti panggil parent
  }
}

class Fish extends Animal {
  constructor(num_legs, bloodWarmness) {
    super('Fish',num_legs, bloodWarmness)// mesti panggil parent
  }
}

class Bat extends Animal {
  constructor(num_legs, bloodWarmness) {
    super('Bat',num_legs, bloodWarmness)// mesti panggil parent
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs, bloodWarmness) {
    super('Chimpanzee',num_legs, bloodWarmness)// mesti panggil parent
    this.superpower = new SuperPower('Chimpanzee') // COMPOSITION MANGGIL CLASS LAIN DI SESUATU CLASS
  }
}

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


let frog = new Frog(undefined, false);
console.log(frog);
let chimpanzee = new Chimpanzee(2, undefined);
console.log(chimpanzee);
console.log(chimpanzee.superpower.use_laser_vision());
