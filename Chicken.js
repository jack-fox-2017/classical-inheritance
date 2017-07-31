const Animals = require('./animals_inheritance');
const SuperPower = require('./SuperPower');

class Chicken extends Animals{
  constructor(type){
    super('Chicken',2,1,false);
    this.type = type;
    this.superpower = new SuperPower(this.name, this.type);
  }
}


let chicken = new Chicken('kampung');
chicken.num_legs += 1;
console.log('jumlah kaki: ', chicken.num_legs);
console.log(chicken.superpower.use_laser_vision());
