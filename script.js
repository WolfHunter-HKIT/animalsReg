let ctrlBtns = document.querySelectorAll(".ctrlBtn");
let submitBtns = document.querySelectorAll(".submit");

ctrlBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn.id == "dogBtn") {
			console.log("pressed Dog");
		} else if (btn.id == "catBtn") {
			console.log("pressed Cat");
		} else {
			console.log("pressed Bird");
		}
	});
});

submitBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		if (btn.id == "submitDog") {
			console.log("submitted Dog Form");
		} else if (btn.id == "submitCat") {
			console.log("submitted Cat Form");
		} else {
			console.log("submitted Bird Form");
		}
	});
});
