let ctrlBtns = document.querySelectorAll(".ctrlBtn");
let dogBtn = document.getElementById("dogBtn");
let catBtn = document.getElementById("catBtn");
let birdBtn = document.getElementById("birdBtn");
const forms = document.querySelectorAll("form");
const dogForm = document.getElementById("dogForm");
const catForm = document.getElementById("catForm");
const birdForm = document.getElementById("birdForm");
const dogDisplay = document.getElementById("dogDisplay");
const catDisplay = document.getElementById("catDisplay");
const birdDisplay = document.getElementById("birdDisplay");
const dogShow = document.getElementById("dogShow");
const catShow = document.getElementById("catShow");
const birdShow = document.getElementById("birdShow");
const dogClear = document.getElementById("clearDogs");
const catClear = document.getElementById("clearCats");
const birdClear = document.getElementById("clearBirds");

let dogList = [];
let catList = [];
let birdList = [];

// Loads values from local storage and sets default configuration
function startup() {
	dogBtn.style.backgroundColor = "rgb(123, 109, 199)";
	catShow.style.display = "none";
	birdShow.style.display = "none";
	catClear.style.display = "none";
	birdClear.style.display = "none";

	// -- Loads from dog storage
	if (localStorage.getItem("dogList") != null) {
		dogList = localStorage.getItem("dogList");
		dogList = JSON.parse(dogList);
		dogUpdate();
	}

	// -- Loads from cat storage
	if (localStorage.getItem("catList") != null) {
		catList = localStorage.getItem("catList");
		catList = JSON.parse(catList);
		catUpdate();
	}

	// -- Loads from bird storage
	if (localStorage.getItem("birdLocal") != null) {
		birdLocal = localStorage.getItem("birdLocal");
		birdLocal = JSON.parse(birdLocal);
		birdUpdate();
	}
}
startup();

// Cycles forms' displays
ctrlBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn == dogBtn) {
			dogForm.style.display = "flex";
			catForm.style.display = "none";
			birdForm.style.display = "none";
			dogShow.style.display = "table";
			catShow.style.display = "none";
			birdShow.style.display = "none";
			dogClear.style.display = "block";
			catClear.style.display = "none";
			birdClear.style.display = "none";
			dogBtn.style.backgroundColor = "rgb(123, 109, 199)";
			catBtn.style.backgroundColor = "darkslateblue";
			birdBtn.style.backgroundColor = "darkslateblue";
		} else if (btn == catBtn) {
			dogForm.style.display = "none";
			catForm.style.display = "flex";
			birdForm.style.display = "none";
			dogShow.style.display = "none";
			catShow.style.display = "table";
			birdShow.style.display = "none";
			dogClear.style.display = "none";
			catClear.style.display = "block";
			birdClear.style.display = "none";
			dogBtn.style.backgroundColor = "darkslateblue";
			catBtn.style.backgroundColor = "rgb(123, 109, 199)";
			birdBtn.style.backgroundColor = "darkslateblue";
		} else {
			dogForm.style.display = "none";
			catForm.style.display = "none";
			birdForm.style.display = "flex";
			dogShow.style.display = "none";
			catShow.style.display = "none";
			birdShow.style.display = "table";
			dogClear.style.display = "none";
			catClear.style.display = "none";
			birdClear.style.display = "block";
			dogBtn.style.backgroundColor = "darkslateblue";
			catBtn.style.backgroundColor = "darkslateblue";
			birdBtn.style.backgroundColor = "rgb(123, 109, 199)";
		}
	});
});

// Fetches information and stores it in arrays
forms.forEach((form) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		// Initiates if submitted the dog form
		if (form.id == "dogForm") {
			// Fetches user inputs, then checks if all fields are filled out
			let inputs = document.querySelectorAll("#dogForm>input");
			if (!checkIfEmpty(inputs)) {
				return;
			}
			// Pushes to an array and local storage
			dogList.push(
				new Dog(
					inputs[0].value,
					inputs[1].value,
					inputs[2].value,
					inputs[3].value,
					inputs[4].value,
					inputs[5].value
				)
			);
			localStorage.setItem("dogList", JSON.stringify(dogList));
			// Displays objects in a table element
			dogUpdate();
			form.reset();
		}
		// Initiates if submitted the cat form
		else if (form.id == "catForm") {
			// Fetches user inputs, then checks if all fields are filled out
			let inputs = document.querySelectorAll("#catForm>input");
			if (!checkIfEmpty(inputs)) {
				return;
			}
			// Pushes to an array and local storage
			catList.push(
				new Cat(
					inputs[0].value,
					inputs[1].value,
					inputs[2].value,
					inputs[3].value,
					inputs[4].value,
					inputs[5].value
				)
			);
			localStorage.setItem("catList", JSON.stringify(catList));
			// Displays objects in a table element
			catUpdate();
			form.reset();
		}
		// Initiates if submitted the bird form
		else {
			let inputs = document.querySelectorAll("#birdForm>input");
			if (!checkIfEmpty(inputs)) {
				return;
			}
			// Pushes to an array and local storage
			birdList.push(
				new Bird(
					inputs[0].value,
					inputs[1].value,
					inputs[2].value,
					inputs[3].value,
					inputs[4].value
				)
			);
			localStorage.setItem("birdList", JSON.stringify(birdList));
			// Displays objects in a table element
			birdDisplay.innerHTML = "";
			birdUpdate();
			form.reset();
		}
	});
});

// A function that checks if any of a form's inputs are empty
function checkIfEmpty(inputs) {
	for (let element of inputs) {
		if (element.value == "") {
			alert("All fields must be filled.");
			return false;
		} else {
			return true;
		}
	}
}

// Buttons to clear storage
dogClear.addEventListener("click", () => {
	dogList = [];
	localStorage.removeItem("dogList");
	dogUpdate();
});
catClear.addEventListener("click", () => {
	catList = [];
	localStorage.removeItem("catList");
	catUpdate();
});
birdClear.addEventListener("click", () => {
	birdList = [];
	localStorage.removeItem("birdList");
	birdUpdate();
});

// General DOM updates
function dogUpdate() {
	dogDisplay.innerHTML = "";
	for (let element of dogList) {
		let row = document.createElement("tr");
		for (let value in element) {
			let col = document.createElement("td");
			col.textContent = element[value];
			row.appendChild(col);
		}
		dogDisplay.appendChild(row);
	}
}
function catUpdate() {
	catDisplay.innerHTML = "";
	for (let element of catList) {
		let row = document.createElement("tr");
		for (let value in element) {
			let col = document.createElement("td");
			col.textContent = element[value];
			row.appendChild(col);
		}
		catDisplay.appendChild(row);
	}
}
function birdUpdate() {
	birdDisplay.innerHTML = "";
	for (let element of birdList) {
		let row = document.createElement("tr");
		for (let value in element) {
			let col = document.createElement("td");
			col.textContent = element[value];
			row.appendChild(col);
		}
		birdDisplay.appendChild(row);
	}
}

// General class for animals
class Animal {
	constructor(name, age, legs) {
		this.name = name;
		this.age = age;
		this.legs = legs;
	}

	printInfo() {
		for (let element in this) {
			console.log(this[element]);
		}
	}
}

// A class for making dog objects
class Dog extends Animal {
	constructor(name, age, legs, fur, tail, muzzle) {
		super(name, age, legs);
		this.fur = fur;
		this.tail = tail;
		this.muzzle = muzzle;
	}
}

// A class for making cat objects
class Cat extends Animal {
	constructor(name, age, legs, fur, tail, whiskers) {
		super(name, age, legs);
		this.fur = fur;
		this.tail = tail;
		this.whiskers = whiskers;
	}
}

// A class for making bird objects
class Bird extends Animal {
	constructor(name, age, legs, wings, beak) {
		super(name, age, legs);
		this.wings = wings;
		this.beak = beak;
	}
}
