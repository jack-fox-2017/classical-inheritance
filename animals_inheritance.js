'use strict'

class Binatang {
  constructor(nama,alatGerak,jumlahKaki){
    this.nama = nama
    this.alatGerak = alatGerak
    this.jumlahKaki = jumlahKaki | 4
  }

  jalan(kecepatan){
    this.kecepatan = kecepatan
    return `${this.nama} Bergerak ke samping dengan ${this.alatGerak} yang berjumlah ${this.jumlahKaki} dengan ${this.kecepatan}`
  }

  berhenti(){
    return `${this.nama} berhenti dengan kedua ${this.alatGerak} nya`
  }
}

class Badak extends Binatang{
  constructor(nama,alatGerak,jumlahKaki,bercula){
    super(nama,alatGerak,jumlahKaki)
    this.cula = bercula
    this.skill = new SuperPower()
  }

  seruduk(){
    return  `${this.nama} mengeluarkan ${this.skill.use_laser_vision()} dengan cula ${this.cula} nya`
  }
}

class Kurakura extends Binatang{
  constructor(nama,alatGerak,jumlahKaki,tempurung){
    super(nama,alatGerak,jumlahKaki)
    this.tempurung = tempurung
    this.skill = new SuperPower()
  }

  bertahan(){
    return `${this.nama} bertahan menggunakan tempurung ${this.tempurung} nya`
  }

  serang(){
    return `${this.nama} bersembunyi dengan menggunakan skill ${this.skill.be_invisible()}`
  }

}

class SuperPower{
  constructor(){

  }

  use_laser_vision(){
    return `Blast lasser vision`
  }

  be_invisible(){
    return `Hide myself power`
  }

  flying_high(){
    return `flying high`
  }


}


let KuyaImoet = new Kurakura("Kuya","kaki",undefined,"baja")
console.log(KuyaImoet.bertahan());
console.log(KuyaImoet.serang());

let Badak1 = new Badak("BadakKuat","kaki",undefined,1)
console.log(Badak1.skill.use_laser_vision());
console.log(Badak1.seruduk());


let kodok = new Binatang("kodk","kaki","5")
console.log(kodok.jalan("sangat cepat"));
console.log(kodok.berhenti());
