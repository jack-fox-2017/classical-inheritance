"use strict"

class Animal {
	constructor(legs, fingers) {
		this._legs = legs
		this._fingers = fingers
		this._superPower = new SuperPower()
	}

	speak() {
		return `I'm a ${this._legs} legged animal.`
	}
}

class Frog extends Animal {
	constructor(color) {
		super(4, 3)
		this._color = color
	}

	jump() {
		console.log("I'm jumping!");
	}
}

class Cat extends Animal {
	constructor(eyeColor) {
		super(4, 4)
		this._eyeColor = eyeColor
	}
}

class Wolf extends Animal {
	constructor(woofSound) {
		super(4,4)
		this._woofSound = woofSound
	}
}

class SuperPower {
	constructor(){

	}

	use_laser_vision() {
		return 'using laser vision!'
	}

	be_invisible() {
		return 'being invisible!'
	}
}

let wolf = new Wolf('auuuu')
console.log(wolf._superPower.use_laser_vision()); 