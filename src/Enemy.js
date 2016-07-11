"use strict";

const enemyImages = require("./Enemy-images");
const enemyImg = enemyImages.enemyImages;
console.log("enemyImgene", enemyImg );

///// NEW ENEMY CONSTRUCTOR /////
const Enemy = function(){
  this.skill = 50;
  this.weapons = [];
  this.armor = null;
  this.speed = 50;
  this.initiative = 50;
};

var newEnemy = function(name,health,skill,speed, initiative,image ) {
  this.characterName = name;
  this.health = health;
  this.skillBonus = skill;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
  this.image = image;
};

newEnemy.prototype = new Enemy();

// create each enemy
var jakeLong = new newEnemy("Jake Long",120,45,10, 35,enemyImg[0]);
var raven = new newEnemy("Raven Baxter",120,45,10, 35,enemyImg[1]);
var cory = new newEnemy("Cory Baxter",120,45,10, 35,enemyImg[2]);
var stitch = new newEnemy("Stitch",120,45,10, 35,enemyImg[3]);
var kimPossible = new newEnemy("Kim Possible",120,45,10, 35,enemyImg[4]);
var ronStoppable = new newEnemy("Ron Stoppable",120,45,10, 35,enemyImg[5]);
var rufus = new newEnemy("Rufus",120,45,10, 35,enemyImg[6]);

const enemyArray = [jakeLong, raven, cory, stitch, kimPossible, ronStoppable, rufus]


module.exports = [ enemyArray ];