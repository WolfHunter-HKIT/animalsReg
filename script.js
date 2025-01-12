let ctrlBtns = document.querySelectorAll(".ctrlBtn");
let dogBtn = document.getElementById("dogBtn");
let catBtn = document.getElementById("catBtn");
let birdBtn = document.getElementById("birdBtn");
let submitBtns = document.querySelectorAll(".submit");
const dogForm = document.getElementById("dogForm");
const catForm = document.getElementById("catForm");
const birdForm = document.getElementById("birdForm");

let dogList = [];
let catList = [];
let birdList = [];

dogBtn.style.backgroundColor = "rgb(123, 109, 199)";

// Cycles forms
ctrlBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn == dogBtn) {
			console.log("pressed Dog");
			dogForm.style.display = "flex";
			catForm.style.display = "none";
			birdForm.style.display = "none";
			dogBtn.style.backgroundColor = "rgb(123, 109, 199)";
			catBtn.style.backgroundColor = "darkslateblue";
			birdBtn.style.backgroundColor = "darkslateblue";
		} else if (btn == catBtn) {
			console.log("pressed Cat");
			dogForm.style.display = "none";
			catForm.style.display = "flex";
			birdForm.style.display = "none";
			dogBtn.style.backgroundColor = "darkslateblue";
			catBtn.style.backgroundColor = "rgb(123, 109, 199)";
			birdBtn.style.backgroundColor = "darkslateblue";
		} else {
			console.log("pressed Bird");
			dogForm.style.display = "none";
			catForm.style.display = "none";
			birdForm.style.display = "flex";
			dogBtn.style.backgroundColor = "darkslateblue";
			catBtn.style.backgroundColor = "darkslateblue";
			birdBtn.style.backgroundColor = "rgb(123, 109, 199)";
		}
	});
});

// Fetches information and stores it in arrays
submitBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		if (btn.id == "submitDog") {
			console.log("submitted Dog Form");
			let inputs = document.querySelectorAll("#dogForm>input");
			checkIfEmpty(inputs);
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
		} else if (btn.id == "submitCat") {
			console.log("submitted Cat Form");
			let inputs = document.querySelectorAll("#catForm>input");
			checkIfEmpty(inputs);
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
		} else {
			console.log("submitted Bird Form");
			let inputs = document.querySelectorAll("#birdForm>input");
			checkIfEmpty(inputs);
			birdList.push(
				new Bird(
					inputs[0].value,
					inputs[1].value,
					inputs[2].value,
					inputs[3].value,
					inputs[4].value
				)
			);
		}
	});
});

function checkIfEmpty(form) {
	for (let element of form) {
		if (element.value == "") {
			alert("All fields must be filled.");
			break;
		}
	}
}

function display(type, list) {
	if (type == 'dog') {
		for (let element of dogList) {
			
		}
	}
}

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

class Dog extends Animal {
	constructor(name, age, legs, fur, tail, muzzle) {
		super(name, age, legs);
		this.fur = fur;
		this.tail = tail;
		this.muzzle = muzzle;
	}
}

class Cat extends Animal {
	constructor(name, age, legs, fur, tail, whiskers) {
		super(name, age, legs);
		this.fur = fur;
		this.tail = tail;
		this.whiskers = whiskers;
	}
}

class Bird extends Animal {
	constructor(name, age, legs, wings, beak) {
		super(name, age, legs);
		this.wings = wings;
		this.beak = beak;
	}
}
