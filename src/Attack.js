"use strict";

let Players = require("./player");
let enemys = require("./Enemy");
let spawnedEnemy;


function randomNumber (x) {
  return Math.floor(Math.random() * (x-1) + 1);
}

function attack (player1, player2, hero, enemy) {
  let player1Attack = player1.skill + player1.skillBonus;
  let player2Attack = player2.skill + player2.skillBonus;
  let dodge1;
  let dodge2;

  player1Attack = mathAttack(player1Attack);
  player2Attack = mathAttack(player2Attack);

  player1Attack = critChance(player1Attack);
  player2Attack = critChance(player2Attack);

  // dodgeChance(dodge1, dodge2, player1, player2, player1Attack, player2Attack);
  player2Attack = dodgeChance(player1, player2Attack);
  player1Attack = dodgeChance(player2, player1Attack);
  // dodgeChance(player2, player1Attack);
  hitEachOther(player1, player2, player1Attack, player2Attack);
  addCharacterCards(hero, enemy);
}


function dodgeChance (player, attack) {
  let dodge = player.speed + player.speedBonus;
  dodge = dodge/10 + randomNumber(10);
  if (dodge >= 18) {
    attack = 0;
    return attack;
  } else {
    return attack;
  }
}

function mathAttack (x) {
  x = x/5 + randomNumber(10);
  return x;
}

function critChance (attack) {
  if (randomNumber(20) > 16) {
    attack = attack * 2;
    return attack;
  } else {
    return attack;
  }
}

function hitEachOther (player1, player2, player1Attack, player2Attack) {
  player2.health = player2.health - player1Attack;
  if (player2.health < 0) {
    player2.health = 0;
    winnerAnnouncement(player1);
    $("#attackButton").attr("disabled", true);
    return;
  }
  player1.health = player1.health - player2Attack;
  if (player1.health < 0) {
    player1.health = 0;
    winnerAnnouncement(player2);
    $("#attackButton").attr("disabled", true);
    return;
  }
}

function winnerAnnouncement (winner) {
  let announcement = $("<h3>").html(`The winner is ${winner.characterName} with the use of <h2>${winner.weapons[0].name}!</h2>`);
  $("#announcement").append(announcement);
  $("#gridSystemModal").modal("show");
  setInterval(function() { chooseId(winner) }, 1000);
}

let chooseId = function(winner) {
  if (winner.player === true) {
    $(".reveal").html("You Win");
  }
  else {
    $(".reveal").html("You Lose");
  }
  let counter = 0;
  let chosenNum = Math.floor(Math.random() * (8 - 1) + 1);
  $(`#reveal--${chosenNum}`).removeClass("hidden");
  counter = counter + 1;
  if (counter === 30) {
    clearInterval(chooseId);
  }
};

function initiative (hero, enemy) {
  if ( enemy === undefined) {
    return;
  }

  let heroInitiative = hero.initiative + hero.initiativeBonus;
  heroInitiative = heroInitiative/4 + randomNumber(10);

  let enemyInitiative = enemy.initiative + enemy.initiativeBonus;
  enemyInitiative = enemyInitiative/4 + randomNumber(10);

  if (heroInitiative > enemyInitiative) {
    attack(hero, enemy, hero, enemy);
  } else {
    attack(enemy, hero, hero, enemy);
  }
}

function spawnEnemy (enemy) {
  enemys = enemys[0];
  spawnedEnemy = enemys[randomNumber(enemys.length) - 1];
  console.log("enemys",enemys );
  let weaponsArray = Players.weapons.weaponsArray;
  console.log("weapon",weaponsArray );
  spawnedEnemy.weapons.push(weaponsArray[randomNumber(weaponsArray.length) - 1]);
  console.log("spawnEnemy",spawnedEnemy);


  return spawnedEnemy

}

function addCharacterCards (player, enemy){
   $('#playerDiv').html(
     `
    <div class="player-container">
     <div class="playerName">${player.characterName}</div>
     <div class="playerHealth">Health: ${player.health}</div>
     <div class="playerSpeed">Attack: ${player.speed+player.speedBonus}</div>
     <div class="playerAbility">${player.weapons[0].name}</div>
    </div>
     `
     );

   $('#enemyDiv').html(
     `
    <div id="enemy-container">
     <div class="enemyName">${spawnedEnemy.characterName}</div>
     <div class="enemyHealth">Health: ${spawnedEnemy.health}</div>
     <div class="enemySpeed">Attack: ${spawnedEnemy.speed + spawnedEnemy.speedBonus}</div>
     <div class="enemyAbility">${spawnedEnemy.weapons[0].name}</div>
    </div>
     `
     );
 }

 function playerCardHandler () {
  $('.playercontainer').click(function() {
    $('.playercontainer').each( function() {
        if ($(this).offset().left < 0) {
            $(this).css("left", "150%");
        }
    });

    $(this).animate({
         left: '-50%'
     }, 500);

     if ($(this).next().size() > 0) {
         $(this).next().animate({
             left: '50%'
         }, 500);
     } else {
         $(this).prevAll().last().animate({
             left: '50%'
         }, 500);
     }
});

 }

let attackFunctions = {
  randomNumber, attack, initiative, spawnEnemy, addCharacterCards, playerCardHandler
};

module.exports = attackFunctions;