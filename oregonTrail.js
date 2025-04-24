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

var result1 = new Array();
result1[0] = "You cross the river, but unfortunately lose some spare parts. Thankfully, everything else is fine!";
result1[1] = "You go left and are forced to travel down a sloped area. One of your oxen gets injured, so you are set back a couple of days waiting for it to heal. However, on the way, you come across some shiitake mushrooms!";
result1[2] = "You look around for a buffalo to eat. Many days pass before you see your first one. But your aim doesn’t fail you—you now have weeks' worth of food to eat!";
result1[3] = "You let go of one of your oxen, which makes the journey harder. You have to take extra care of the remaining ox to ensure it stays healthy.";
result1[4] = "You disregard the danger, build a fire to keep yourself warm, and go to sleep. Fortunately, the fire keeps you warm, but the next morning, you realize you're behind schedule and have wasted a day.";
result1[5] = "You decide to take the ox with you. Although it will require additional food, it allows you to move faster and reach your destination quicker.";
result1[6] = "You leave your sick ox behind, which lightens your load but makes you feel guilty. You hope it will survive without you.";
result1[7] = "You trade an ox with the traveler, but don’t tell them it's an ox that got sick and isn’t able to work as a healthy ox would. How devious!";
result1[8] = "You take the safer path, which is longer but avoids potential danger. While it costs extra time, you feel safer and more secure in your journey.";
result1[9] = "You stop and rest, and you regain some health and energy to continue your journey. You are more efficient than ever!";

var result2 = new Array();
result2[0] = "You walk the entire day, looking for a bridge. You don’t find any, and waste an entire day. The next day, you cross the river and lose some food, but you gain a spare part along the way.";
result2[1] = "You go right, and reach a clearing. There is some wood left behind where someone previously lit a fire. You heat up some water and eat some food, giving some to your oxen. This is the first time in a long time that you’ve had hot food.";
result2[2] = "You continue along the way, hoping the food that you have will be able to sustain you. Many days pass, and you and your oxen are extremely hungry. But your luck turns, and you pass a deserted wagon! You don’t know who left it there, or how long it has been there, but you take the food and eat for the first time in days.";
result2[3] = "You let go of some of your food, but now you have fewer meals. This will make it harder to travel, and you may be at risk of running out of food soon.";
result2[4] = "You continue traveling, hoping to escape the hostile territory. Fortunately, you don't encounter any dangers and eventually get out of their range, but you've lost valuable time.";
result2[5] = "You leave the sick ox behind, knowing you don’t have enough food. However, the journey feels a bit easier with less weight to carry, though you feel a sense of loss.";
result2[6] = "You decide to care for your sick ox. It takes a couple of days of rest, but your ox gets better, and you can continue traveling with your full team. You’re glad you made the decision you did.";
result2[7] = "You decide to trade some spare parts with the traveler for food. While you gain food, you are now down on spare parts, which may affect your ability to fix things later on in your journey.";
result2[8] = "You take the more dangerous path. There are a few rough spots, but you manage to push through. You save time, but the journey has taken a toll on your health and morale. One of your oxen gets hurt too. ";
result2[9] = "You continue on despite the fever, hoping to make it to your destination before the weather worsens. It's a risk, but you push through the sickness and manage to get a bit farther.";

let day = 0;
let health = 100;
let milesLeft = 2170;
let milesTraveled = 0;
let simDisplay = "";

let currentQuestionIndex = 0; // Track the current question

function newQuestion() {
	let sim = document.getElementById("sim");
	let questionText = document.getElementById("questions");
	let questionArea = document.getElementById("question");
	let resultOutput = document.getElementById("resultOutput");
	//Show the question and options
	sim.style.display = "block";
	questionText.style.display = "block";
	questionArea.style.display = "block";

	//Hide the result output when asking a new question
	resultOutput.innerHTML = "";
	resultOutput.style.display = "none";

	//Reset index if you want to loop through questions
	if (currentQuestionIndex >= questions.length) {
		currentQuestionIndex = 0;
	}
	document.getElementById("questions").innerHTML = questions[currentQuestionIndex];
	document.getElementById("option1").innerHTML = firstOption[currentQuestionIndex];
	document.getElementById("option2").innerHTML = secondOption[currentQuestionIndex];
	let endingMessages = [
		"You made it to Oregon City. Congratulations on your travels!",
		"You made it to Fort Hall!",
		"You made it to Soda Springs.",
		"You made it to Fort Boise.",
		"You made it to Independence Rock.",
		"You are stranded in the middle of the trail. Better Luck next time."
	];
	if (currentQuestionIndex == 8) {
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

function resultRouting() {
	document.getElementById("option1").onclick = function () {
		showResult(result1[currentQuestionIndex]); //Displays the designated result for the choice chosen
		hideQuestionAndOptions();
		travel();
		currentQuestionIndex++;
	};

	document.getElementById("option2").onclick = function () {
		showResult(result2[currentQuestionIndex]); //Displays the designated result for the choice chosen
		hideQuestionAndOptions();
		travel();
		currentQuestionIndex++;
	};
}

function showResult(result) {
	let resultOutput = document.getElementById("resultOutput");
	resultOutput.innerHTML = result;
	resultOutput.style.display = "block"; //Show result only now
}

function hideQuestionAndOptions() {
	document.getElementById("sim").style.display = "none";
	document.getElementById("questions").style.display = "none";
	document.getElementById("question").style.display = "block";
}

function ending(milesTraveled, endMessages) {
	if (milesTraveled == 2170) {
		return endMessages[0];
	}
	else if (milesTraveled < 2170 && milesTraveled >= 1160) {
		return endMessages[1];
	}
	else if (milesTraveled < 1160 && milesTraveled >= 1130) {
		return endMessages[2];
	}
	else if (milesTraveled < 1130 && milesTraveled >= 900) {
		return endMessages[3];
	}
	else if (milesTraveled < 900 && milesTraveled >= 500) {
		return endMessages[4];
	}
	else {
		return endMessages[5];
	}
}

function travel() {
	const keywords = ["river", "sick", "hostile", "influenza"];
	const amount = applyEffectsFromQuestion(keywords, questions[currentQuestionIndex]);

	let randomMiles = Math.floor(Math.random() * 200);
	let randomDays = Math.floor(Math.random() * 20);
	let randomHealthLoss = Math.floor(Math.random() * 20) - amount;

	milesTraveled += randomMiles;
	milesLeft = 2170 - milesTraveled;

	day += randomDays;
	if (day > 365) day = 365;

	health -= randomHealthLoss;
	if (health < 0) health = 0;

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
	const state = {
		day,
		health,
		milesLeft,
		milesTraveled
	};
	localStorage.setItem("oregonTrailGameState", JSON.stringify(state));
}

function loadGameState() {
	const saved = localStorage.getItem("oregonTrailGameState");
	if (saved) {
		const state = JSON.parse(saved);
		day = state.day || 0;
		health = state.health || 100;
		milesLeft = state.milesLeft || 2170;
		milesTraveled = state.milesTraveled || 0;

		if (day > 365) day = 365;
		if (health < 0) health = 0;
	}
	updateDisplay();
}

function applyEffectsFromQuestion(keywords, questionText) {
	let lowerCaseQuestion = questionText.toLowerCase();

	for (let i = 0; i < keywords.length; i++) {
		if (lowerCaseQuestion.includes(keywords[i].toLowerCase())) {
			return health > 0 ? -40 : 10;
		}
	}
	return 10;
}

let foodValue = document.querySelector("#food");
let clothingValue = document.querySelector("#clothing");
let oxenValue = document.querySelector("#oxen");
let wagonValue = document.querySelector("#wagon");
let partsValue = document.querySelector("#parts");

let totalMoney = 1000; // Starting money

// Load previous values from local storage
window.addEventListener("DOMContentLoaded", () => { // checks to make sure all events have been loaded
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
});

// Update total money and display purchases
function calculateMoney() {
	let f = Number(foodValue.value);
	let c = Number(clothingValue.value);
	let o = Number(oxenValue.value);
	let w = Number(wagonValue.value);
	let p = Number(partsValue.value);
	//to display the amount of all the variables
	let spent = (40 * f) + (20 * c) + (100 * o) + (200 * w) + (50 * p);
	let remaining = 1000 - spent;

	totalMoney = remaining; // Update the global money

	let shopData = { // extract values from objects and assign to variables to save to localStorage
		food: f,
		clothing: c,
		oxen: o,
		wagon: w,
		parts: p,
		money: totalMoney
	};
	localStorage.setItem("shopData", JSON.stringify(shopData)); //converts the shopData into a string

	updateShopDisplay();
}

// displays what the user bought
function updateShopDisplay() {
	let f = Number(foodValue.value);
	let c = Number(clothingValue.value);
	let o = Number(oxenValue.value);
	let w = Number(wagonValue.value);
	let p = Number(partsValue.value);

	let result = `You currently have ${f} food, ${c} clothing, ${o} oxen, ${w} wagon, and ${p} spare parts.`;
	document.getElementById("shopList").innerHTML = result;
	simDisplay = result;
}

function nameSave() {
	const username = document.getElementById("username").value;
	localStorage.setItem("username", username);
	document.getElementById("nameOutput").innerHTML = "Player: " + (localStorage.getItem("username") || "Unknown Traveler");
}

window.onload = function () {
	loadGameState();
	updateDisplay();
	resultRouting();
	newQuestion();
};

/*
<div id="display">
		<p>Amount of money remaining: </p>
		<p id="money"></p>
		<p id="food"></p>
		<p id="clothing"></p>
		<p id="oxen"></p>
		<p id="wagon"></p>
		<p id="parts"></p>
	</div>
	<script>
		document.getElementById("money").innerHTML = "$" + money;
		document.getElementById("food").innerHTML = "Food: " + food;
		document.getElementById("clothing").innerHTML = "Clothing: " + clothing;
		document.getElementById("oxen").innerHTML = "Oxen: " + oxen;
		document.getElementById("wagon").innerHTML = "Wagon: " + wagon;
		document.getElementById("parts").innerHTML = "Spare Parts: " + parts;
	</script>
*/
