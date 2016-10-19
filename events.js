var output = document.getElementById("output-target");
var pgHeader = document.getElementById('page-header');
var input = document.getElementById('keypress-input');
var piggy = document.getElementById('guinea-pig');

document.addEventListener("click", clickHandler);
pgHeader.addEventListener("mouseover", function() { output.innerHTML = "You moved your mouse over the header." });
pgHeader.addEventListener("mouseout", function() { output.innerHTML = "You left me!!"; });
input.addEventListener("keydown", function() { output.innerHTML = input.value });


function clickHandler () {

	output.innerHTML = "You clicked on the " + event.target.innerHTML + " section.";

	switch (event.target.innerHTML) {
		case "Add Color":
			piggy.classList.toggle("blue");
			break;

		case "Hulkify":
			piggy.classList.toggle("hulk");
			break;

		case "Capture it":
			piggy.classList.toggle("captured");
			break;

		case "Rounded":
			piggy.classList.toggle("rounded");
			break;

		default:
			console.log("error: no class to toggle!");
	}
}