"use strict";

const heroesImages = require("./Heros-images")

///// NEW HERO CONSTRUCTOR /////

const Hero = function () {
  this.initiative = 50;
  this.skill = 50;
  this.speed = 50;
  this.defense = 0;
  this.weapons = [];
};

const newHero = function(name,health,skillBonus,initBonus,speedBonus,image) {
  this.characterName = name;
  this.health = health;
  this.skillBonus = skillBonus;
  this.initiativeBonus = initBonus;
  this.speedBonus = speedBonus;
  this.image = image
}
newHero.prototype = new Hero();

///// NEW HERO CONSTRUCTOR /////
let image1 = heroesImages[0];
let image2 = heroesImages[1];
let image3 = heroesImages[2];
let image4 = heroesImages[3];
let image5 = heroesImages[4];
let image6 = heroesImages[5];
let image7 = heroesImages[6];
let image8 = heroesImages[7];
let image9 = heroesImages[8];
let image10 = heroesImages[9];
let spongeBob = new newHero("SpongeBob Squarepants",200,25,15,15,image1);
let patrick = new newHero("Patrick Star",200,25,15,15,image2);
let doug = new newHero("Doug Funny",200,25,15,15,image3);
let roger = new newHero("Roger Klotz",200,25,15,15,image4);
let porkchop = new newHero("Porkchop",200,25,15,15,image5);
let cousinSkeeter = new newHero("Cousin Skeeter",200,25,15,15,image6);
let heyArnold = new newHero("Hey Arnold",200,25,15,15,image7);
let timmyTurner = new newHero("Timmy Turner",200,25,15,15,image8);
let rocko = new newHero("Rocko",200,25,15,15,image9);
let heffer = new newHero("Heffer",200,25,15,15,image10);


var heroArray = [ spongeBob, patrick, doug, roger, porkchop, cousinSkeeter, heyArnold, timmyTurner, rocko, heffer ];

module.exports = { heroArray }