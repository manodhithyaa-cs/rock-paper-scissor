// Declaration of Variables

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
var ComputerChoice;
var UserChoice;

// Getting Bot Choice

function getComputerChoice()
{
	const choices = ['r' , 'p' , 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	console.log(randomNumber);
	return choices[randomNumber];
}

// getComputerChoice();

// Display Bot Choice in Console

console.log(getComputerChoice());

// Declaration of Function Win
// Calculating User Score When User Wins

function win()
{
	userScore++;
	console.log('User Wins!');
	console.log('user-score: ' + userScore);
	userScore_span.innerHTML = userScore;
}

// Declaration of Function Lose
// Calculating Bot Score When Bot Wins

function lose()
{
	computerScore++;
	console.log('User Lost...');
	console.log('computer-score: ' + computerScore);
	computerScore_span.innerHTML = computerScore;
}

// Declaration of Function Draw

function draw()
{
	console.log('Draw');	
	console.log('computer-score: ' + computerScore);
	console.log('user-score: ' + userScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
}

// Declaration of Function game
/************************ 
	Calling the functions
	* win
	* lose
	* draw
************************/

function game(userChoice)
{
	const computerChoice = getComputerChoice();
	console.log('Computer Choice: ' + computerChoice);
	console.log('User Choice: ' + userChoice);
	switch(userChoice + computerChoice)
	{
		case 'rs':
		case 'pr':
		case 'sp':

			// Calling Function Win

			win();
			if (userChoice == 'r')
			{
				if (computerChoice == 's')
				{
					result_div.innerHTML = 'Rock Beats Scissor. You Win!';
					console.log('Rock Beats Scissor. You Win!');
				}
			}
			if (userChoice == 'p')
			{
				if (computerChoice == 'r')
				{
					result_div.innerHTML = 'Paper Covers Rock. You Win!';
					console.log('Paper covers Rock. You Win!');
				}
			}
			if (userChoice == 's')
			{
				if (computerChoice == 'p')
				{
					result_div.innerHTML = 'Scissor Beats Paper. You Win!';
					console.log('Scissor Beats Paper. You Win!');
				}
			}
			if (userChoice == 'r')
			{
				setTimeout(function(){ rock_div.classList.add('win'); }, 0);
				setTimeout(function(){ rock_div.classList.remove('win'); }, 1000);
			}
			if (userChoice == 'p')
			{
				setTimeout(function(){ paper_div.classList.add('win'); }, 0);
				setTimeout(function(){ paper_div.classList.remove('win'); }, 1000);
			}
			if (userChoice == 's')
			{
				setTimeout(function(){ scissor_div.classList.add('win'); }, 0);
				setTimeout(function(){ scissor_div.classList.remove('win'); }, 1000);
			}
			break;
		case 'rp':
		case 'ps':
		case 'sr':

			// Calling Function Lose

			lose();
			if (computerChoice == 'r')
			{
				if (userChoice == 's')
				{
					result_div.innerHTML = 'Rock Beats Scissor. You Lose...';
					console.log('Rock Beats Scissor. You Lose...');
				}
			}
			if (computerChoice == 'p')
			{
				if (userChoice == 'r')
				{
					result_div.innerHTML = 'Paper Covers Rock. You Lose...';
					console.log('Paper covers Rock. You Lose...');
				}
			}
			if (computerChoice == 's')
			{
				if (userChoice == 'p')
				{
					result_div.innerHTML = 'Scissor Beats Paper. You Lose...';
					console.log('Scissor Beats Paper. You Lose...');
				}
			}
			if (userChoice == 'r')
			{
				setTimeout(function(){ rock_div.classList.add('lose'); }, 0);
				setTimeout(function(){ rock_div.classList.remove('lose'); }, 1000);
			}
			if (userChoice == 'p')
			{
				setTimeout(function(){ paper_div.classList.add('lose'); }, 0);
				setTimeout(function(){ paper_div.classList.remove('lose'); }, 1000);
			}
			if (userChoice == 's')
			{
				setTimeout(function(){ scissor_div.classList.add('lose'); }, 0);
				setTimeout(function(){ scissor_div.classList.remove('lose'); }, 1000);
			}
			break;
		case 'rr':
		case 'ss':
		case 'pp':

			// Calling Function Draw

			draw();
			if (computerChoice == 'r')
			{
				if (userChoice == 'r')
				{
					result_div.innerHTML = 'You & Bot chose Rock. Draw';
					console.log('You & Bot chose Rock. Draw');
				}
			}
			if (computerChoice == 'p')
			{
				if (userChoice == 'p')
				{
					result_div.innerHTML = 'You & Bot chose Paper. Draw';
					console.log('You & Bot chose Paper. Draw');
				}
			}
			if (computerChoice == 's')
			{
				if (userChoice == 's')
				{
					result_div.innerHTML = 'You & Bot chose Scissor. Draw';
					console.log('You & Bot chose Scissor. Draw');
				}
			}
			if (userChoice == 'r')
			{
				setTimeout(function(){ rock_div.classList.add('draw'); }, 0);
				setTimeout(function(){ rock_div.classList.remove('draw'); }, 1000);
			}
			if (userChoice == 'p')
			{
				setTimeout(function(){ paper_div.classList.add('draw'); }, 0);
				setTimeout(function(){ paper_div.classList.remove('draw'); }, 1000);
			}
			if (userChoice == 's')
			{
				setTimeout(function(){ scissor_div.classList.add('draw'); }, 0);
				setTimeout(function(){ scissor_div.classList.remove('draw'); }, 1000);
			}
			break;
	}
}

// Declaration of Main Function
// This Function is used to Start The Game on User's Choice

function main()
{
	console.log('Application Started');

	// Calling Function game when User Choice is Rock

	rock_div.addEventListener('click' , function ()
	{
		game('r')
		console.log('You clicked on Rock');
	})

	// Calling Function game when User Choice is Paper

	paper_div.addEventListener('click' , function ()
	{
		game('p')
		console.log('You clicked on Paper');
	})

	// Calling Function game when User Choice is Scissor

	scissor_div.addEventListener('click' , function ()
	{
		game('s')
		console.log('You clicked on Scissor');
	})
}

// Calling Main Function to start the Game

main();