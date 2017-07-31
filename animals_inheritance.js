"use strict"

class Animal {
	constructor(name, legs, fingers) {
		this._name = name
		this._legs = legs
		this._fingers = fingers
		this._superPower = new SuperPower(this._name)
	}

	speak() {
		return `I'm a ${this._legs} legged animal.`
	}
}

class Frog extends Animal {
	constructor(color) {
		super('Frog', 4, 3)
		this._color = color
	}

	jump() {
		console.log("I'm jumping!");
	}
}

class Cat extends Animal {
	constructor(eyeColor) {
		super('Cat', 4, 4)
		this._eyeColor = eyeColor
	}
}

class Wolf extends Animal {
	constructor(woofSound) {
		super('Wolf', 4, 4)
		this._woofSound = woofSound
	}
}

class SuperPower {
	constructor(name){
		this._name = name
	}

	use_laser_vision() {
		return `${this._name} using laser vision!`
	}

	be_invisible() {
		return `${this._name} being invisible!`
	}
}

let wolf = new Wolf('auuuu')
console.log(wolf._superPower.use_laser_vision()); 