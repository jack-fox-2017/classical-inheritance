"use strict"

class Animal {
  constructor(kaki) {
    this.kaki = kaki || 2;

  }

  get foot()
  {
    return this.kaki;
  }

  warnaBulu(color)
  {
    console.log(`Binatang ini memiliki ${this.kaki} kaki dan warna bulu ${color}`);
  }
}


class Anjing extends Animal {
  constructor(kaki, makanan, age) {
    super(kaki);
    this.makanan = makanan;
    this.power = new Power(age);// composition
  }

  pelihara()
  {
    console.log((`Anjing adalah hewan berkaki ${this.kaki} yang makan ${this.makanan}` ));
  }

}

class Power {
  constructor(age) {

    this.age = age;
  }

  waterBender(power)
  {
    console.log(`anjing ini memiliki kekuatan yang bisa mengendalikan ${power} and age is ${this.age}` );
  }

}


//var power = new Power(age)

var binatang = new Anjing(4, 'Daging', 9);
binatang.warnaBulu('Hitam');
binatang.pelihara();
binatang.power.waterBender('air');
