"use strict"

class Animal {
  constructor(warna, organNafas, umur) {
    this._warna = warna
    this._organNafas = organNafas
    this._umur = umur
  }
}

class Dog extends Animal {
  constructor(warna, organNafas, umur, ras) {
    super(warna, organNafas, umur)
    this._ras = ras
    this._superPower = new SuperPower
  }

  gonggong() {
    console.log('woofff!');
  }
}

class Fish extends Animal {
  constructor(warna, organNafas, umur, jumSirip) {
    super(warna, organNafas, umur)
    this._jumlahSirip = jumSirip
    this._superPower = new SuperPower
  }

  menyelam() {
    console.log('wusss!');
  }
}

class SuperPower{
  constructor() {}

  useLaserVision() {
    console.log('saya menggunakan laser vision..');
  }

  beInvisible() {
    console.log('saya menjadi tidak terlihat..');
  }
}


let fish1 = new Fish('biru', 'paru-paru', 20, 3)
let dog1 = new Dog('hitam', 'paru-paru', 1, 'pitbull')

console.log(dog1);
dog1.gonggong()
dog1._superPower.useLaserVision()
dog1._superPower.beInvisible()

console.log(fish1);
fish1.menyelam()
