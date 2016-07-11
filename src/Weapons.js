"use strict";

///// NEW WEAPON CONSTRUCTOR /////
const Weapon = function(name, damage, hands) {
	this.name = name;
	this.damage = damage;
	this.hands = hands;
};

///// WEAPONS /////
const sword = new Weapon("Sword",5,1);
const battleAxe = new Weapon("Battle Axe",12,2);
const mace = new Weapon("Mace",4,1);
const dagger = new Weapon("Dagger",4,1);
const crossbow = new Weapon("Crossbow",10,2);

const weaponsArray = [sword, battleAxe,mace,dagger,crossbow]

module.exports = { weaponsArray };