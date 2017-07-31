'use strict'

class Animal {
  constructor(bergerak, jumlah_kaki, bernafas, berdarah) {
    this.gerak = bergerak
    this.num_kaki = jumlah_kaki || 4
    this.nafas = bernafas
    this.darah = berdarah || 'panas'
  }
}

class Buaya extends Animal {
  constructor(bergerak, jumlah_kaki, bernafas, bertaring) {
    super(bergerak, jumlah_kaki, bernafas)
    this.taring = bertaring
    this.superPower = new SuperPower()
  }
  detailBuaya() {
    return `Buaya bergerak dengan ${this.gerak}, jumlah kaki ${this.num_kaki}, bernafas dengan ${this.nafas}, berdarah ${this.darah}, bertaring ${this.taring} dan mempunyai ${this.superPower.buaya_power()}`
  }
}

class Burung extends Animal {
  constructor(bergerak, jumlah_kaki, bernafas, berdarah, berparuh) {
    super(bergerak, jumlah_kaki, bernafas, berdarah)
    this.paruh = berparuh
    this.superPower = new SuperPower()
  }
  detailBurung() {
    return `Burung elang bergerak dengan ${this.gerak}, jumlah kaki ${this.num_kaki}, bernafas dengan ${this.nafas}, berparuh, berdarah ${this.darah}, berparuh ${this.paruh} dan mempunyai ${this.superPower.burung_power()} `
  }
}

class SuperPower {
  constructor () {
  }
  buaya_power() {
    return 'cakar yang kuat'
  }
  burung_power() {
    return 'kecepatan terbang'
  }
}

let buaya = new Buaya('berjalan dan berenang', '', 'paru-paru', '', 'kuat');
let burung = new Burung('terbang', '2', 'paru-paru', 'dingin', 'tajam' )

console.log(buaya.detailBuaya());
console.log(burung.detailBurung());
