"use strict";

let Weapons = require("./Weapons");
let Heros = require("./Heros");
let counter = 0;
let imgCounter = -1;
let heroArray = Heros.heroArray;
let user = [];
const images = require("./Heros-images.js");
const heroImg = images.heroesImages

let populateDom = function(){
	console.log("heroArray",heroArray );
	console.log("heroImg",heroImg[0] );
	for (let i = 0; i < heroArray.length; i ++){
		counter ++
		imgCounter ++
		console.log("heroArray[i]",heroArray[i].speed );
		$('#characterContainer').append(`<div class="playercontainer"id="playercontainer${counter}"><div class="heroname">${heroArray[i].characterName}</div><img src="${heroImg[imgCounter]}"><div class="playerHealth">Health: ${heroArray[i].health}</div><div class="playerSpeed">Attack: ${heroArray[i].speed+heroArray[i].speedBonus}</div><a class="next">Confirm</a></div>`);
	}
	$('.next').on("click", selectCharacter);
	$('#charSelectContainer').removeClass('hidden');
};

let selectCharacter = function(){
	let parent = $(this).parent(".playercontainer");
	let child = parent.children('.heroname').html();
	let user1;
	let test = child;
		for(let i = 0; i < heroArray.length; i ++){
			let current = heroArray[i];
			if (test === current.characterName){
				user1 = current;
				console.log("user",user1 );
			}
		}
	$('#charSelectContainer').addClass('hidden');
	populateAbility(user1);
};

let populateAbility = function(user1) {
	let currentArray = Weapons.weaponsArray;
	let container1 = $("#1HandAbilityContainer").removeClass("hidden");
	let container2 = $("#2HandAbilityContainer").removeClass("hidden");
	for (let i =0; i < currentArray.length; i ++){
		let current = currentArray[i];
		let button = $("<button>").addClass("abilityButton").html(`${current.name}`);
		if (current.hands === 1){
			container1.append(button);
		} else {
			container2.append(button);
		}
		button.click(function() {
			selectAbility(user1, currentArray);
		});
	}
};

let selectAbility = function(user1, currentArray) {
	currentArray.forEach(function(index) {
		// console.log("event",event.target.innerHTML );
		// console.log("current",currentArray );
		if (event.target.innerHTML === index.name) {
			user1.weapons.push(index);
			if (user1.weapons[0].hands === 2) {
				$("#fightReady").removeClass("hidden");
				$("#abilityContainer").addClass("hidden");
				user.push(user1);
				console.log("user1",user1 );
			}
			if(user1.weapons.length === 2 && user1.weapons[0].hands + user1.weapons[0].hands){
				$("#fightReady").removeClass("hidden");
				$("#abilityContainer").addClass("hidden");
				user.push(user1);
				console.log("user1",user1 );
			}
		}
	});
};

module.exports = {populateDom, selectCharacter, user};

