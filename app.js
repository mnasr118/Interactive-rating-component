const submitBtn = document.querySelector(".submit");
const cardBody = document.querySelector(".card-body");
const cardBodyTwo = document.querySelector(".cardBodyTwo");
const ratingsBtns = document.querySelectorAll(".circle");
let starsScore = 3;

submitBtn.addEventListener("click", onSubmit);
ratingsBtns.forEach((btn) => {
	btn.addEventListener("click", score);
});

function onSubmit() {
	cardBody.classList.add("hide");
	cardBodyTwo.classList.remove("hide");
}

function score(event) {
	ratingsBtns.forEach((btn) => {
		btn.classList.remove("active");
	});

	if (event.target.classList.contains("circle")) {
		event.target.classList.add("active");
	} else {
		event.target.parentElement.classList.add("active");
	}
	let starsScore = event.target.textContent;
	console.log(starsScore);

	document.getElementById("starsFinal").innerHTML =
		"You selected " + starsScore + " out of 5";
}
