class SuperPower {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  use_laser_vision(){
    return this.name+' '+this.type+' use laser vision';
  }

  be_invisible(){
    return this.name+' '+this.type+' be invisible';
  }
}



module.exports = SuperPower;
