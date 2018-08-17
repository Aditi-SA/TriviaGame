var q1 = {
	question: "Which of the Deathly Hallows does Harry receive as a Christmas gift??",
	option1: "Elder Wand",
	option2: "Cloak of Invisibility",
	option3: "Resurrection Stone",
	option4: "Deluminator",
	answer: "Cloak of Invisibility",
	info: "<img src='assets/images/q1.jpg'"	
};

var q2 = {
	question: "Who destroyed the last remaining horcrux?",
	option1: "Hermoine Granger",
	option2: "Voldemort",
	option3: "Harry Potter",
	option4: "Neville Longbottom",
	answer: "Neville Longbottom",
	info: "<img src='assets/images/q2.jpg"
};

var q3 = {
	question: "Which of the following is NOT a protection for the Philosopher's (Sorcerer's) Stone?",
	option1: "Cornish Pixies",
	option2: "Devil's Snare",
	option3: "Wizards Chess",
	option4: "Mirror of Erised",
	answer: "Cornish Pixies",
	info: "<img src='assets/images/q3.jpg'>"
};

var q4 = {
	question: "Which of the following was NOT a Death Eater?",
	option1: "Bathilda Bagshot",
	option2: "Lucius Malfoy",
	option3: "Bartemious Crouch Jr.",
	option4: "Bellatrix Lestrange",
	answer: "Bathilda Bagshot",
	info: "<img src='assets/images/q4.jpg'>"
};

var q5 = {
	question: "What establishment does Aberforth Dumbledore own and run?",
	option1: "Three Broomsticks",
	option2: "Leaky Couldron",
	option3: "Hogs Head Inn",
	option4: "HoneyDukes",
	answer: "Hogs Head Inn",
	info: "<img src='assets/images/q5.jpg'>"
};

var q6 = {
	question: "Which type of magical creature carries Sirius Black away from Hogwarts?",
	option1: "Hippograff",
	option2: "Dragon",
	option3: "Unicorn",
	option4: "Thestral",
	answer: "Hippogriff",
	info: "<img src='assets/images/q6.jpg'>"
};

var q7 = {
	question: "Which is the house ghost of Ravenclaw?",
	option1: "The Fat Friar",
	option2: "Nearly headless Nick",
	option3: "The Grey Lady",
	option4: "The Bloody Baron",
	answer: "The Grey Lady",
	info: "<img src='assets/images/q7.jpg'>"
};

var q8 = {
	question: "Which of the Weasleys went to Romania to study dragons?",
	option1: "Charlie",
	option2: "Bill",
	option3: "Percy",
	option4: "George",
	answer: "Charlie",
	info: "<img src='assets/images/q8.jpg'>"
};

var q9 = {
	question: "What position on the Gryffindor Quidditch team did Harry Potter play?",
	option1: "Seeker",
	option2: "Beater",
	option3: "Chaser",
	option4: "Keeper",
	answer: "Seeker",
	info: "<img src='assets/images/q9.jpg'>"
};

var q10 = {
	question: "What is Albus Dumbledore's full name?",
	option1: "Albus Peverell Wulfric Brian Dumbledore",
	option2: "Albus Peverell Brian Dumbledore",
	option3: "Albus Percival Wulfric Brian Dumbledore",
	option4: "Albus Percival Bilius Dumbledore",
	answer: "Albus Percival Wulfric Brian Dumbledore",
	info: "<img src='assets/images/q10.jpg'>"
};
// questions for the game:

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var num = 0;
var Correct = 0;
var Incorrect = 0;


//list the timer variables with inital values
var time = 15;
var numtimeout = 0;


// function that runs the list of questions at a defined pace of interval = 15 sec
function nextquestion(){
    console.log("two");
    time = 15;
    counter = setInterval(runtimer, 1000);
    $(".timer").html("<h2>Time Remaining: " + time + "</h2>")

    $(".question").html(questions[num].question);
	$(".option1").html(questions[num].option1);
	$(".option2").html(questions[num].option2);
	$(".option3").html(questions[num].option3);
	$(".option4").html(questions[num].option4);
	$(".info").empty();
}

// function that decrements the timer from pre-defined time
// Timer stops when time = 0 and flashes Red when time < 8
function runtimer() {
    console.log("three");
    time--;
    $(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		stoptimer();
		$(".choice").empty();
    } 
    else if (time < 8) {
		$(".timer").addClass("red");
		setTimeout(function(){
			$(".timer").removeClass("red")
		}, 500)
	};
}

// function that stops the timer. jump to next question. In last question then end the game
function stoptimer(){
    clearInterval(counter);
    num++;
    if (num == questions.length) {
		setTimeout(endgame, 4000);
	} else {
		setTimeout(nextquestion, 4000);
	}
}

// Counts the number of failure to answer the question, tells the user they are out of time, and displays an image. 
function timeout() {
	numtimeout++;
    $(".question").html("<p>Time's up!! <br> The correct answer was: " + questions[num].answer + "</p>");
    //$(".question").html("<p>Time's up!! </p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// Lets the user know they got the question right and displays an image.
function rightanswer() {
	$(".question").html("<p>Correct!</p>");
	$(".info").html("<p>" + questions[num].info + "</p>");
	stoptimer();
}

// Counts a wrong answer, tells the user they are wrong, and displays an image. 
function wronganswer() {
	Incorrect++;
	$(".question").html("<p>Wrong! <br> The correct answer was: " + questions[num].answer + "</p>");
	$(".info").html("<p>" + questions[num].info + "</p>");
	stoptimer();
}

// Tells the user how many questions they got right/wrong/unanswered. Resets variables and shows buttons so the user can play again. 
function endgame() {
	$(".question").html("<h2>You got " + Correct + " answers correct!</h2>"
		+ "<h2>You got " + Incorrect + " wrong!</h2>" + "<h2>You didn't answer " + numtimeout + " questions!</h2>");
	$(".choice").empty();
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	Correct = 0;
	Incorrect = 0;
	numtimeout=0;
	$("button").show();
}

// starts the trivia game 
// selects questions array, hides the rules and start button
$("#startgame").on("click", function() {
    console.log("one");
   
    //adi: check this
    //$('input:radio').css('display', 'block'); //or css('visibility', 'visible');
    //$(".QuestAns").css('display', 'block');
    nextquestion();
    $("button").hide();    
    $(".rules").hide();
});

// Clicking on a multiple choice answer.
$(".choice").on("click", function() {
	console.log(questions[num].answer);
	
	console.log(this);
	if ($(this).text() === questions[num].answer) {
		Correct++;
		rightanswer();
		stop();		
	} 
	else {		
		wronganswer();
		stop();
	};

	$(".choice").empty();
});
