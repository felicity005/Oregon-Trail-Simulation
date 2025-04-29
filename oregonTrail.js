function goToNextPage(nextPage) {
	window.location.href = nextPage;
}
//Simulation questions and answers section
var questions = new Array(); //list of beginning parts to each question
questions[0] = "You come across a river. Do you...";
questions[1] = "You reach a fork in the road. Do you...";
questions[2] = "You are hungry. Do you...";
questions[3] = "Oh no! You want to cross over a bridge, but your wagon is too heavy! Do you...";
questions[4] = "You stop for the night, but realize Native Americans who are known to be hostile reside in this area. Do you...";
questions[5] = "You see an ox on the way that has been left by another traveller. Would you like to...";
questions[6] = "Your ox gets sick. Will you...";
questions[7] = "You pass another traveller on your way, and they offer to trade with you, offering you food. Will you give them...";
questions[8] = "You see a sign for two different paths, a longer, safer one, or a shorter, more dangerous one. Will you take...";
questions[9] = "You start coughing and have a runny nose, and realize you have a fever. You've caught influenza! Will you...";
questions[10] = "You find a wagon wheel cracked badly. Do you...";
questions[11] = "You encounter a steep hill. Do you...";
questions[12] = "A stranger approaches you offering a map that claims to reveal a shortcut. Do you...";
questions[13] = "You realize you are low on clean water. Do you...";
questions[14] = "A sudden storm hits, flooding the trail. Do you...";
questions[15] = "You find abandoned supplies, but they look a little suspicious. Do you...";
questions[16] = "You hear howling in the distance during the night. Do you...";
questions[17] = "One of your party members sprains an ankle. Do you...";
questions[18] = "You reach a small trading post, but prices are very high. Do you...";
questions[19] = "Food is getting scarce and hunting has been poor. Do you...";

var firstOption = new Array(); //list of first option of would you rather questions to ask the user 
firstOption[0] = "cross a river and risk losing some of your belongings?";
firstOption[1] = "go left?";
firstOption[2] = "hunt for a buffalo?";
firstOption[3] = "let go of one of your oxen? (Remember, you must always have at least 2 oxen at all time!)";
firstOption[4] = "disregard that and build a fire to keep yourself warm and go to sleep?";
firstOption[5] = "take the ox with you, knowing you have to feed it but it will let you move faster?";
firstOption[6] = "leave your ox behind?";
firstOption[7] = "an ox?";
firstOption[8] = "the safer path?";
firstOption[9] = "stop and rest, knowing you are wasting precious days before bad weather comes in?";
firstOption[10] = "try to repair it yourself using your spare parts?";
firstOption[11] = "take the hill head-on, risking exhaustion?";
firstOption[12] = "trust the stranger and pay for the map?";
firstOption[13] = "search for a river nearby to refill your supplies?";
firstOption[14] = "wait out the storm, even if it costs precious time?";
firstOption[15] = "take the supplies, hoping they are not spoiled?";
firstOption[16] = "stay awake all night to guard your wagon?";
firstOption[17] = "stop and rest for a few days to let them recover?";
firstOption[18] = "buy supplies anyway, despite the high cost?";
firstOption[19] = "ration your remaining food more strictly?";

var secondOption = new Array(); //list of second option of would you rather questions to ask the user 
secondOption[0] = "walk along the river bank to see if there is a bridge?";
secondOption[1] = "go right?";
secondOption[2] = "look for food left behind by other settlers?";
secondOption[3] = "let go of some of your food? (Remember, you must have at least 3 meals at all time!)";
secondOption[4] = "continue travelling until you are hopefully out of their territory?";
secondOption[5] = "leave it behind, knowing you don't have enough food?";
secondOption[6] = "care for your ox?";
secondOption[7] = "spare parts?";
secondOption[8] = "the more dangerous path?";
secondOption[9] = "continue on, because reaching your destination before the weather gets bad is more important?";
secondOption[10] = "leave the broken wagon and carry what you can on foot?";
secondOption[11] = "try to find a longer, easier path around the hill?";
secondOption[12] = "decline and stick to your original route?";
secondOption[13] = "boil and reuse any water you have left?";
secondOption[14] = "try to cross through the flooded trail carefully?";
secondOption[15] = "leave the supplies, suspecting they might be poisoned?";
secondOption[16] = "trust your luck and just sleep normally?";
secondOption[17] = "bandage the ankle and push forward slowly?";
secondOption[18] = "move on without buying, conserving your money for later?";
secondOption[19] = "try to find berries or edible plants nearby?";

var result1 = new Array();
result1[0] = "You cross the river, but unfortunately lose some spare parts. Thankfully, everything else is fine!";
result1[1] = "You go left and are forced to travel down a sloped area. One of your oxen gets injured, so you are set back a couple of days waiting for it to heal. However, on the way, you come across some shiitake mushrooms!";
result1[2] = "You look around for a buffalo to eat. Many days pass before you see your first one. But your aim doesn’t fail you—you now have weeks of meals to eat!";
result1[3] = "You let go of an ox, which makes the journey harder. You have to take extra care of the remaining oxen to ensure they stay healthy.";
result1[4] = "You disregard the danger, build a fire to keep yourself warm, and go to sleep. Fortunately, the fire keeps you warm, but the next morning, you realize you're behind schedule and have wasted a day.";
result1[5] = "You decide to take the it with you. Although it will require additional food, it allows you to move faster and reach your destination quicker.";
result1[6] = "You leave your sick ox behind, which lightens your load but makes you feel guilty. You hope it will survive without you.";
result1[7] = "You trade an ox with the traveler, but don’t tell them it's an one that got sick and isn’t able to work as a healthy one would. How devious!";
result1[8] = "You take the safer path, which is longer but avoids potential danger. While it costs extra time, you feel safer and more secure in your journey.";
result1[9] = "You stop and rest, and you regain some health and energy to continue your journey. You are more efficient than ever!";
result1[10] = "You repair the wheel successfully using a spare part, but you have fewer parts left for future repairs.";
result1[11] = "You take the hill head-on. It’s exhausting, but you make it over without any major issues.";
result1[12] = "You trust the stranger and pay for the map. It leads you to a shortcut, saving you several days of travel!";
result1[13] = "You find a river and refill your supplies. The water is fresh, and you avoid dehydration.";
result1[14] = "You wait out the storm. Though you lose a day, you stay safe and dry.";
result1[15] = "You take the supplies. Luckily, most of it is still good, and now you have so many more meals!";
result1[16] = "You stay awake guarding your wagon. You scare off a pack of wolves that approach during the night.";
result1[17] = "You stop to rest for a few days. You recover well, but you lose valuable travel time.";
result1[18] = "You buy the expensive supplies. It hurts your wallet, but you're well-stocked for the tough journey ahead.";
result1[19] = "You ration carefully. It’s tough on morale, but it keeps everyone fed a little longer.";

var result2 = new Array();
result2[0] = "You walk the entire day, looking for a bridge. You don’t find any, and waste an entire day. The next day, you cross the river and lose some food, but you gain a spare part along the way.";
result2[1] = "You go right, and reach a clearing. There is some wood left behind where someone previously lit a fire. You heat up some water and eat some food, giving some to your oxen. This is the first time in a long time that you’ve had something hot to eat.";
result2[2] = "You continue along the way, hoping what you have will be able to sustain you. Many days pass, and you and your oxen are extremely hungry. But your luck turns, and you pass a deserted wagon! You don’t know who left it there, or how long it has been there, but you take the meal and eat for the first time in days.";
result2[3] = "You let go of some of your food, but now you have fewer meals. This will make it harder to travel, and you may be at risk of running out soon.";
result2[4] = "You continue traveling, hoping to escape the hostile territory. Fortunately, you don't encounter any dangers and eventually get out of their range, but you've lost valuable time.";
result2[5] = "You leave the sick ox behind, knowing you don’t have enough food. However, the journey feels a bit easier with less weight to carry, though you feel a sense of loss.";
result2[6] = "You decide to care for your sick ox. It takes a couple of days of rest, but it gets better, and you can continue traveling with your full team. You’re glad you made the decision you did.";
result2[7] = "You decide to trade some spare parts with the traveler for meals. You are now down on spare parts, which may affect your ability to fix things later on in your journey.";
result2[8] = "You take the more dangerous path. There are a few rough spots, but you manage to push through. You save time, but the journey has taken a toll on your health and morale. An ox gets hurt too. ";
result2[9] = "You continue on despite the fever, hoping to make it to your destination before the weather worsens. It's a risk, but you push through the sickness and manage to get a bit farther.";
result2[10] = "You abandon the wagon. Carrying everything slows you down drastically, but you manage to keep moving.";
result2[11] = "You find a longer path that’s easier to travel, but you lose two extra days in detour.";
result2[12] = "You decline the stranger’s offer. Later you hear rumors the map was fake. Good call!";
result2[13] = "You reuse your water, but someone in your party gets sick from contaminated water, slowing you down.";
result2[14] = "You cross the flooded trail. It’s dangerous and you lose a few supplies, but you make it across.";
result2[15] = "You leave the suspicious supplies. A few miles later, you hear of another group that got sick! You’re glad you left those supplies alone.";
result2[16] = "You sleep normally. Nothing happens, but you wake up to find a few supplies stolen!";
result2[17] = "You bandage the ankle and move slowly. Your ankle pains a lot, but you remain on schedule. ";
result2[18] = "You move on without buying anything.You don’t know if this decision will come back to bite you.";
result2[19] = "You find some berries to eat. It helps a bit, but there is still not enough food to fully feed everyone.";

var endingMessages = new Array();
endingMessages[0] = "After a long and grueling journey through dangerous rivers, terrains, and unpredictable weather, you've finally arrived at Oregon City! The scent of fresh air and the sight of green pastures greet you as you step off your wagon. Your perseverance and determination have paid off, Congratulations! Your journey is complete. Oregon awaits!",
endingMessages[1] = "You made it to Fort Hall! After countless days on the trail, battling exhaustion, disease, and the hardships of the journey, you've arrived. The sound of wagons rolling into the fort's gates signals your arrival, and the weary faces of other travelers offer silent nods of camaraderie. You decide to stop there, content with where you have reached, and hope to make another trip to reach Oregon soon.",
endingMessages[2] = "You made it to Soda Springs. The landscape before you changes as you arrive at the bubbling, refreshing waters of Soda Springs. The constant bubbling of the springs offers both comfort and a reminder of nature's unpredictability. As you rest by the springs, the surrounding beauty serves as a brief reprieve from the hardships of the trail. You decide you want to stay there forever.",
endingMessages[3] = "You made it to Fort Boise. The dusty roads lead you to a beacon of safety and stability amidst the rugged wilderness. The fort stands as a testament to human resilience, offering shelter and supplies to those who have endured the harsh conditions of the Oregon Trail. The people of Fort Boise share stories of others who have passed through—some victorious, others lost. You find a new home there.",
endingMessages[4] = "You made it to Independence Rock. A landmark that signifies the midway point of your journey. As you stand before it, you can almost feel the gaze of all the previous travellers weighing on you. This iconic landmark has seen countless travelers carve their names into its surface, each marking their passage through this unforgiving land. You carve your name on it too.",
endingMessages[5] = "Tragedy strikes as your wagon breaks down, and resources have dwindled too far to continue. The wilderness around you feels both endless and oppressive. You are stranded, helpless, with no clear path forward. The dream of reaching Oregon fades as you realize your journey has come to an untimely halt. Better luck next time."

let day = 0;
let health = 100;
let milesLeft = 2170;
let milesTraveled = 0;

let currentQuestionIndex = 0; // Track the current question
let randomNum = Math.floor(Math.random() * 6) + 3; // The random number of questions that each user gets

function newQuestion() {
	// Basically sets all the items that I want to hide later so it is easier
	let sim = document.getElementById("sim");
	let questionText = document.getElementById("questions");
	let questionArea = document.getElementById("question");
	let resultOutput = document.getElementById("resultOutput");
	let button1 = document.getElementById("option1");
	let button2 = document.getElementById("option2");
	//Show the question and options
	sim.style.display = "block";
	questionText.style.display = "block";
	questionArea.style.display = "block";
	button1.style.display = "block";
	button2.style.display = "block";

	//Hide the result output when asking a new question
	resultOutput.innerHTML = "";
	resultOutput.style.display = "none";

	//Reset index if you want to loop through questions
	let randomQ = Math.floor(Math.random() * 20);
	currentQuestionIndex = randomQ;
	document.getElementById("questions").innerHTML = questions[randomQ];
	document.getElementById("option1").innerHTML = firstOption[randomQ];
	document.getElementById("or").innerHTML = "or";
	document.getElementById("option2").innerHTML = secondOption[randomQ];

	if (currentQuestionIndex == randomNum) {
		document.getElementById("question").style.display = "none";
		document.getElementById("resultOutput").style.display = "none";
		sim.style.display = "none";
		questionText.style.display = "none";
		questionArea.style.display = "none";
		// Call the ending function and display the result
		let endMessage = ending(milesTraveled, endingMessages);
		document.getElementById("ending").innerHTML = endMessage;
	}
}
// Basically directs the intended output to each of the options chosen
function resultRouting() {
	document.getElementById("option1").onclick = function () {
		let result = result1[currentQuestionIndex];
		showResult(result);
		updateFood(result);
		updateOx(result);
		updateParts(result);
		hideQuestionAndOptions();
		travel();
		currentQuestionIndex++;
		updateShopDisplay();
	};

	document.getElementById("option2").onclick = function () {
		let result = result2[currentQuestionIndex];
		showResult(result);
		updateFood(result);
		updateOx(result);
		updateParts(result);
		hideQuestionAndOptions();
		travel();
		currentQuestionIndex++;
		updateShopDisplay();
	};
}
//calls all the functions where the option chosen is passed through
function updateInventory(result) {
	updateFood(result);
	updateOx(result);
	updateParts(result);
	localStorage.setItem("shopData", JSON.stringify(savedData));
}

function showResult(result) {
	let resultOutput = document.getElementById("resultOutput");
	resultOutput.innerHTML = result;
	resultOutput.style.display = "block"; //Show result only now
}
//function for hiding the questions and options once option is chosen
function hideQuestionAndOptions() {
	document.getElementById("sim").style.display = "none";
	document.getElementById("questions").style.display = "none";
	document.getElementById("question").style.display = "block";
}
// Outputs different ending messages based on the number of miles traveled
function ending(milesTraveled) {
	if (milesTraveled == 2170) {
		return endingMessages[0];
	}
	else if (milesTraveled < 2170 && milesTraveled >= 1160) {
		return endingMessages[1];
	}
	else if (milesTraveled < 1160 && milesTraveled >= 1130) {
		return endingMessages[2];
	}
	else if (milesTraveled < 1130 && milesTraveled >= 900) {
		return endingMessages[3];
	}
	else if (milesTraveled < 900 && milesTraveled >= 500) {
		return endingMessages[4];
	}
	else {
		return endingMessages[5];
	}
}

function travel() {
	// Array of keywords that are used to check if health should be subtracted or not
	const keywords = ["river", "sick", "hostile", "influenza"];
	const amount = applyEffectsFromQuestion(keywords, questions[currentQuestionIndex]);

	let randomMiles = Math.floor(Math.random() * 350);
	let randomDays = Math.floor(Math.random() * 40);
	let randomHealthLoss = Math.floor(Math.random() * 30) - amount;
	let endMessage = ending(milesTraveled);

	milesTraveled += randomMiles;
	if (milesTraveled > 2170) {
		milesTraveled = 2170;
	}

	milesLeft = 2170 - milesTraveled;
	if (milesLeft < 0) {
		milesLeft = 0;
	}

	day += randomDays;
	if (day > 365) {
		day = 365;
		alert("You have reached day 365.");
	}

	health -= randomHealthLoss;
	if (health <= 0) {
		health = 0;
		alert("Your health is at 0. Your journey ends here.");

		document.getElementById("sim").style.display = "none";
		document.getElementById("questions").style.display = "none";
		document.getElementById("question").style.display = "none";
		document.getElementById("resultOutput").style.display = "none";

		document.getElementById("health").innerHTML = "Health: 0";

		document.getElementById("ending").innerHTML = endMessage;

		document.getElementById("option1").disabled = true;
		document.getElementById("option2").disabled = true;

		return;
	}

	updateDisplay();
	saveGameState();
}

function updateDisplay() {
	document.getElementById("day").innerHTML = "Day: " + day;
	document.getElementById("health").innerHTML = "Health: " + health;
	document.getElementById("left").innerHTML = "Miles Left: " + milesLeft;
	document.getElementById("traveled").innerHTML = "Miles Traveled: " + milesTraveled;
}

function saveGameState() {
    let savedData = JSON.parse(localStorage.getItem("shopData")) || {
        food: 0,
        clothing: 0,
        oxen: 0,
        wagon: 0,
        parts: 0,
        money: 1000
    };

    let gameState = {
        day,
        health,
        milesLeft,
        milesTraveled,
        food: savedData.food,
        clothing: savedData.clothing,
        oxen: savedData.oxen,
        wagon: savedData.wagon,
        parts: savedData.parts,
        money: totalMoney
    };

    localStorage.setItem("oregonTrailGameState", JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem("oregonTrailGameState");
    if (saved) {
        const state = JSON.parse(saved);
        day = state.day || 0;
        health = state.health || 100;
        milesLeft = state.milesLeft || 2170;
        milesTraveled = state.milesTraveled || 0;
        totalMoney = state.money !== undefined ? state.money : 1000;

        // Restore shop inventory too
        savedData.food = state.food || 0;
        savedData.clothing = state.clothing || 0;
        savedData.oxen = state.oxen || 0;
        savedData.wagon = state.wagon || 0;
        savedData.parts = state.parts || 0;

        // Save updated shopData separately if you still want
        localStorage.setItem("shopData", JSON.stringify(savedData));
    }
    updateDisplay();
    updateShopDisplay();
}

function applyEffectsFromQuestion(keywords, questionText) {
	let lowerCaseQuestion = questionText.toLowerCase();
	let found = false;
	for (let i = 0; i < keywords.length; i++) {
		if (lowerCaseQuestion.includes(keywords[i])) {
			found = true; // found a dangerous keyword
		}
	}
	if (found == true) {
		return -25;
	}
	else {
		return 10; // no keywords found, healthy event
	}
}

let foodValue = document.querySelector("#food");
let clothingValue = document.querySelector("#clothing");
let oxenValue = document.querySelector("#oxen");
let wagonValue = document.querySelector("#wagon");
let partsValue = document.querySelector("#parts");

let totalMoney = 1000; // Starting money

// Load the money value and update the display when the page loads
window.addEventListener("DOMContentLoaded", () => {
	let savedData = JSON.parse(localStorage.getItem("shopData"));
	if (savedData) {
		foodValue.value = savedData.food;
		clothingValue.value = savedData.clothing;
		oxenValue.value = savedData.oxen;
		wagonValue.value = savedData.wagon;
		partsValue.value = savedData.parts;
		totalMoney = savedData.money;
		updateShopDisplay();
	}
	// Load saved name and money
	const savedName = localStorage.getItem("username");
	if (savedName) {
		document.getElementById("nameOutput").innerHTML = "Player: " + savedName;
	}

	const savedMoney = localStorage.getItem("money");
	if (savedMoney) {
		totalMoney = parseInt(savedMoney, 10);
		document.getElementById("moneyDisplay").innerHTML = "Money: $" + totalMoney;
	} else {
		document.getElementById("moneyDisplay").innerHTML = "Money: $0"; // default if nothing saved yet
	}
	loadGameState();
    loadShopData();
});

function loadShopData() {
    // If a new game is started, reset shop data
    if (localStorage.getItem("newGame") == "true") {
        savedData = {
            food: 0,
            clothing: 0,
            oxen: 0,
            wagon: 0,
            parts: 0,
            money: 1000
        };
        localStorage.setItem("shopData", JSON.stringify(savedData));
        localStorage.setItem("newGame", "false");
    }

    savedData = JSON.parse(localStorage.getItem("shopData")) || savedData;
    updateShopDisplay();
}

// Update total money and display purchases
function calculateMoney() {
    let f = Number(foodValue.value);
    let c = Number(clothingValue.value);
    let o = Number(oxenValue.value);
    let w = Number(wagonValue.value);
    let p = Number(partsValue.value);

    let totalFood = savedData.food + f;
    let totalClothing = savedData.clothing + c;
    let totalOxen = savedData.oxen + o;
    let totalWagon = savedData.wagon + w;
    let totalParts = savedData.parts + p;

    if (totalOxen < 2) { alert("You must have at least 2 oxen!"); return; }
    if (totalWagon < 1) { alert("You must have at least 1 wagon!"); return; }
    if (totalFood < 4) { alert("You must have at least 4 food!"); return; }

    let spent = (40 * f) + (20 * c) + (100 * o) + (200 * w) + (50 * p);

    if (spent > totalMoney) {
        alert("You don't have enough money.");
        return;
    }

    totalMoney -= spent;

    savedData.food = totalFood;
    savedData.clothing = totalClothing;
    savedData.oxen = totalOxen;
    savedData.wagon = totalWagon;
    savedData.parts = totalParts;
    savedData.money = totalMoney;

    localStorage.setItem("shopData", JSON.stringify(savedData));
    localStorage.setItem("money", totalMoney);

    foodValue.value = 0;
    clothingValue.value = 0;
    oxenValue.value = 0;
    wagonValue.value = 0;
    partsValue.value = 0;

    updateShopDisplay();
}

let savedData = JSON.parse(localStorage.getItem("shopData")) || {
    food: 0,
    clothing: 0,
    oxen: 0,
    wagon: 0,
    parts: 0,
    money: 1000
};
// Update the shop display
function updateShopDisplay() {
    savedData = JSON.parse(localStorage.getItem("shopData")) || savedData;
    document.getElementById("shopList").innerHTML = `
        You currently have ${savedData.food} food, 
        ${savedData.clothing} clothing, 
        ${savedData.oxen} oxen, 
        ${savedData.wagon} wagon, and 
        ${savedData.parts} spare parts.`;
    document.getElementById("moneyDisplay").innerHTML = "Remaining Money: $" + savedData.money;
}

// Prevent form submission when clicking the button and calculate the money
document.getElementById("updateMoneyButton").addEventListener("click", function (event) {
	event.preventDefault();  // Prevent form submission
	calculateMoney();  // Update the money
});

function nameSave() {
	const username = document.getElementById("username").value;
	localStorage.setItem("username", username);
	document.getElementById("nameOutput").innerHTML = "Player: " + (localStorage.getItem("username") || "Unknown Traveler");
}

function createFinishButton() {
	let finishButton = document.createElement("button");   // Create button to finish task
	finishButton.innerHTML = "Play Again";
	finishButton.onclick = () => restartGame();
}

function restartGame() {
    // Clear the local storage to reset the game state
    localStorage.removeItem("oregonTrailGameState");
    localStorage.removeItem("shopData");
    localStorage.removeItem("money");
    localStorage.removeItem("username");

    // Reset game variables to initial state
    day = 0;
    health = 100;
    milesLeft = 2170;
    milesTraveled = 0;

    // Reset shop values (make sure to reset them here)
    let savedData = {
        food: 0,
        clothing: 0,
        oxen: 0,
        wagon: 0,
        parts: 0,
        money: 1000
    };

    // Save the reset shop data and money to localStorage
    localStorage.setItem("shopData", JSON.stringify(savedData));
    localStorage.setItem("money", "1000");

    totalMoney = 1000;  // Reset starting money

    // Reset the input fields (in case they weren't cleared properly)
    foodValue.value = 0;
    clothingValue.value = 0;
    oxenValue.value = 0;
    wagonValue.value = 0;
    partsValue.value = 0;

    // Hide the current game display and show the start page again
    document.getElementById("sim").style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("resultOutput").style.display = "none";
    document.getElementById("ending").style.display = "none";  // Hide the ending message if it's visible

    // Refresh the page or manually reset the state
    location.reload();  // This triggers a full reload to reset everything properly
    saveGameState();
    saveShopData();
    updateDisplay();
    updateShopDisplay();
}

function updateFood(result) {
    let text = result.toLowerCase();
    if (text.includes("food")) {
        savedData.food = Math.max(0, savedData.food - 1);
    }
    if (text.includes("meal")) {
        savedData.food += 1;
    }
    localStorage.setItem("shopData", JSON.stringify(savedData));
    saveGameState();
}

function updateOx(result) {
	let text = result.toLowerCase();
	if (text.includes("ox")) {
		savedData.oxen = Math.max(0, savedData.oxen - 1);
	}
	if (text.includes("take it")) {
		savedData.oxen += 1;
	}
	localStorage.setItem("shopData", JSON.stringify(savedData));
	saveGameState();
}

function updateParts(result) {
	let text = result.toLowerCase();
	if (text.includes("parts")) {
		savedData.parts = Math.max(0, savedData.parts - 1);
	}
	localStorage.setItem("shopData", JSON.stringify(savedData));
	saveGameState();
}

function startNewGame() {
    alert("Please make sure to buy new items after starting a new game.");
    // Reset shop values
    savedData = {
        food: 0,
        clothing: 0,
        oxen: 0,
        wagon: 0,
        parts: 0,
        money: 1000
    };
    // Ensure the localStorage is cleared for a fresh start
    localStorage.setItem("shopData", JSON.stringify(savedData)); // Save new game data
    localStorage.setItem("money", "1000"); // Reset money to 1000
    localStorage.setItem("newGame", "true"); // Mark this as a new game
    localStorage.removeItem("oregonTrailGameState"); // Clear the previous game state if any
    localStorage.removeItem("username"); // Clear any saved username

    // Reload the page to trigger the reset
    location.reload(); 
}

document.addEventListener("DOMContentLoaded", function () {
    let newGame = localStorage.getItem("newGame") == "true";
    
    if (newGame) {
        // Reset saved data for a new game
        savedData = {
            food: 0,
            clothing: 0,
            oxen: 0,
            wagon: 0,
            parts: 0,
            money: 1000
        };
        localStorage.setItem("shopData", JSON.stringify(savedData)); // Save new shop data
        localStorage.setItem("money", "1000"); // Reset money
        localStorage.setItem("newGame", "false"); // Mark the game as not new anymore
        totalMoney = 1000; // Reset total money
    } else {
        // Load the saved data if not a new game
        savedData = JSON.parse(localStorage.getItem("shopData")) || savedData;
        totalMoney = Number(localStorage.getItem("money")) || 1000;
    }
    
    updateShopDisplay();
    loadGameState();
    checkSuppliesAndToggleButton();
});

function checkSuppliesAndToggleButton() {
    const savedData = JSON.parse(localStorage.getItem("shopData"));
    const travelButton = document.getElementById("travelButton");

    if (!savedData) {
        travelButton.disabled = true;
        travelButton.style.backgroundColor = "grey";
        return;
    }

    const hasEnoughOxen = savedData.oxen >= 2;
    const hasEnoughWagon = savedData.wagon >= 1;
    const hasEnoughFood = savedData.food >= 4;

    if (hasEnoughOxen && hasEnoughWagon && hasEnoughFood) {
        travelButton.disabled = false;
        travelButton.style.backgroundColor = ""; // Reset to normal styling
    } else {
        travelButton.disabled = true;
        travelButton.style.backgroundColor = "grey";
    }
}

// Call it when the page loads
window.onload = function () {
    checkSuppliesAndToggleButton();
};
