/*
 * NOTE: the code here is sloppier than I'd usually write,
 *       I just wanted to get through this review part of
 *       the course while still having a deliverable.
 */

let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
	numSquares = hardButton.classList.contains("selected") ? 6 : 3;

	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	for (let i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].classList.add("hoverable");
	}
});

let easyButton = document.querySelector("#easy");
easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");

	numSquares = hardButton.classList.contains("selected") ? 6 : 3;

	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;

	for (let i = 0; i < squares.length; i++)
	{
		if (i < 3)
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
			squares[i].classList.remove("hoverable");
		}
	}
});

let hardButton = document.querySelector("#hard");
hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");

	numSquares = hardButton.classList.contains("selected") ? 6 : 3;

	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;

	for (let i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		squares[i].classList.add("hoverable");
	}
});

let numSquares = hardButton.classList.contains("selected") ? 6 : 3;

for (let i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].classList.add("hoverable");

	squares[i].addEventListener("click", function() {
		let color = this.style.backgroundColor;
		console.log(color);

		if (color === correctColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColors(color);
			h1.style.backgroundColor = color;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			this.classList.remove("hoverable");
			messageDisplay.textContent = "Try Again";
		}
	});
}

let correctSquare = Math.floor(Math.random() * Math.floor(numSquares));
let correctColor = squares[correctSquare].style.backgroundColor;
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = correctColor;

let messageDisplay = document.querySelector("#message");


function changeColors(color)
{
	for (let i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
		squares[i].classList.remove("hoverable");
	}
}

function pickColor()
{
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(numColors)
{
	let array = [];

	for (let i = 0; i < numColors; i++)
	{
		let randRed = Math.floor(Math.random() * Math.floor(256));
		let randGreen = Math.floor(Math.random() * Math.floor(256));
		let randBlue = Math.floor(Math.random() * Math.floor(256));
		array.push(`rgb(${randRed}, ${randGreen}, ${randBlue})`);
	}

	return array;
}