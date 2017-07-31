const Animals = require('./animals_inheritance');
const SuperPower = require('./SuperPower');

class Cat extends Animals{
  constructor(type){
    super('Cat',2,1,true);
    this.type = type;
    this.superpower = new SuperPower(this.name, this.type);
  }
}

let cat = new Cat('anggora');
cat.num_legs += 3;
console.log('jumlah kaki: ', cat.num_legs);
console.log(cat.superpower.be_invisible());
