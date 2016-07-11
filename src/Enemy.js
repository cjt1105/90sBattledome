"use strict";
///// NEW ENEMY CONSTRUCTOR /////
const Enemy = function(){
  this.skill = 50;
  this.weapons = [];
  this.armor = null;
  this.speed = 50;
  this.initiative = 50;
};

var newEnemy = function(name,health,skill,speed, initiative) {
  this.characterName = name;
  this.health = health;
  this.skillBonus = skill;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
  this.image = null;
};

newEnemy.prototype = new Enemy();

// create each enemy
var jakeLong = new newEnemy("Jake Long",120,45,10, 35);
var raven = new newEnemy("Raven Baxter",120,45,10, 35);
var cory = new newEnemy("Cory Baxter",120,45,10, 35);
var lilo = new newEnemy("Lilo",120,45,10, 35);
var kimPossible = new newEnemy("Kim Possible",120,45,10, 35);
var ronStoppable = new newEnemy("Ron Stoppable",120,45,10, 35);
var rufus = new newEnemy("Rufus",120,45,10, 35);

const enemyArray = [jakeLong, raven, cory, lilo, kimPossible, ronStoppable, rufus]


module.exports = [ enemyArray ];