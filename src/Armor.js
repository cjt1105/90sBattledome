"use strict";

///// NEW ARMOR CONSTRUCTOR /////
const Armor = function(name, defense ) {
	this.name = name;
	this.defense = defense;
};

///// ARMOR /////
const bodyArmor = new Armor("Body Armor",5);
const armoredCloak = new Armor("Armored Cloak",6);
const exoSkeleton = new Armor("Exo-Skeleton",6.5);

module.exports ={ bodyArmor, armoredCloak, exoSkeleton };