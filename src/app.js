"use strict";

let Players = require("./player");
let Enemys = require("./Enemy");
let Attack = require("./Attack.js");
let Dom = require("./DOMfunctions");

let user;
let theEnemy;

$("#fightReady").click( function () {
  user = Dom.user[0];
  theEnemy = Attack.spawnEnemy();
  Attack.addCharacterCards(user, theEnemy);
  $("#attackButton").removeClass("hidden");
  $("#fightReady").addClass("hidden");
});

$("#attackButton").click( function () {
  Attack.initiative(user, theEnemy);
});

Dom.populateDom();
Attack.playerCardHandler();
