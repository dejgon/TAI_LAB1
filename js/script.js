let preQuestions =
    [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
            "correct_answer": "The Front Bottoms",
            "answers": ["The Front Bottoms", "Twenty One Pilots", "The Wonder Years", "The Smith Street Band"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
            "correct_answer": "Niagara Mohawk Building",
            "answers": ["Niagara Mohawk Building", "Taipei 101", "One Detroit Center", "Westendstrasse 1"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
            "correct_answer": "Head",
            "answers": ["Arm", "Leg", "Chest", "Head"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
            "correct_answer": "Eggo Waffles",
            "answers": ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
            "correct_answer": "Goombario",
            "answers": ["Goombella", "Goombarry", "Goomby", "Goombario"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When was Google founded?",
            "correct_answer": "September 4, 1998",
            "answers": ["October 9, 1997", "December 12, 1989", "Feburary 7th, 2000", "September 4, 1998"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which is not a playable character in the 2005 video game Killer7?",
            "correct_answer": "Frank Smith",
            "answers": ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
        },
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The capital of the US State Ohio is the city of Chillicothe.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which company did Bethesda purchase the Fallout Series from?",
            "correct_answer": "Interplay Entertainment",
            "answers": ["Capcom", "Interplay Entertainment", "Blizzard Entertainment", "Nintendo"]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
            "correct_answer": "Unknown Pleasures",
            "answers": ["The Dark Side of the Moon", "Unknown Pleasures", "London Calling", "The Velvet Underground &amp; Nico"]
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who was the first prime minister of Canada?",
            "correct_answer": "John Macdonald",
            "answers": ["John Macdonald", "John Abbott", "Alexander Mackenzie", "Robert Borden"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The land mass of modern day Turkey is called what?",
            "correct_answer": "Anatolia",
            "answers": ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
            "correct_answer": "Doug Bradley",
            "answers": ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these countries is the smallest by population?",
            "correct_answer": "Norway",
            "answers": ["Slovakia", "Norway", "Finland", "Hong Kong"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
            "correct_answer": "Amazon",
            "answers": [
                "eBay",
                "Overstock",
                "Shopify",
                "Amazon"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Generally, which component of a computer draws the most power?",
            "correct_answer": "Video Card",
            "answers": [
                "Hard Drive",
                "Processor",
                "Power Supply",
                "Video Card"
            ]
        }];

let next = document.querySelector('.next');
next.addEventListener('click', getQuestionAndAnswers);
let previous = document.querySelector('.previous');
previous.addEventListener('click', getPrevQuestionAndAnswers)

let results = document.querySelector('.results');

let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');

let userScorePoint = document.querySelector('.userScorePoint');
let pointsElem = document.querySelector('.score');
let questionIndex = document.querySelector('.index');
let restart = document.querySelector('.restart');
restart.addEventListener('click', retakeQuiz);
let progress = document.getElementById("dynamic");
let index = 0;
let points = 0;
let interval;
let current_progress = 100;

let result = document.querySelector('.result');
result.addEventListener('click', showResults);

let userAnswers = document.querySelectorAll('.userAnswer');
let answersTable = [];
questionIndex.innerHTML = (index+1);

    question.innerHTML = preQuestions[index].question;

    for (let i=0; i < answers.length; i++){
        answers[i].innerHTML = preQuestions[index].answers[i];
    answers[i].addEventListener('click', doAction);
    }
    progress.style.width = current_progress+"%";
    interval = setInterval(updateInterval,1000);
    console.log(answersTable[6]);

function doAction(event) {
    if (event.target.innerHTML === preQuestions[index].correct_answer) {
        answersTable[index] = true;
        points++;
        pointsElem.innerText = points;
        console.log("Correct");
        userAnswers[index].style.backgroundColor = "yellowGreen";
        markCorrect(event.target);
    }else {
        answersTable[index] = false;
        markInCorrect(event.target);
        userAnswers[index].style.backgroundColor = "orangeRed";
        console.log("Incorrect");
    }
    disableAnswers();
    window.clearInterval(interval);
}

function markCorrect(event){
    event.style.backgroundColor = "yellowGreen";
}
function markInCorrect(event) {
    event.style.backgroundColor = "orangeRed";
}
function disableAnswers() {
    answers[0].style.pointerEvents = "none";
    answers[1].style.pointerEvents = "none";
    answers[2].style.pointerEvents = "none";
    answers[3].style.pointerEvents = "none";
}
function getQuestionAndAnswers() {
    current_progress = 100;
    window.clearInterval(interval);
    interval = null;
    progress.style.width = current_progress+"%";
    progress.classList.remove("bg-warning");
    progress.classList.remove("bg-danger");
    index++;
    if (index == 19){
        next.classList.add("none");
        result.classList.remove("none");
    }
    if(index == 20){
        results.style.display = "block";
        for (let i=0; i < userAnswers.length; i++){
            if (answersTable[i] == undefined){
                answersTable[i] = false;
                userAnswers[i].style.backgroundColor = "yellow";
            }
            userScorePoint.innerHTML = points;
        }
    }
    question.innerHTML = preQuestions[index].question;

    for (let i=0; i < answers.length; i++){
        if (preQuestions[index].answers[i] == undefined){
            answers[i].style.display = "none";
        }else{
            answers[i].style.display = "block";
        questionIndex.innerHTML = (index)+1;
        answers[i].style.pointerEvents = "auto";
        answers[i].style.backgroundColor = "white";
        answers[i].innerHTML = preQuestions[index].answers[i];
    answers[i].addEventListener('click', doAction);
        }
        
    };
    if (answersTable[index] != undefined) {
        disableAnswers();
    }else {
        interval = setInterval(updateInterval,1000);
    }
}
function updateInterval(){
    current_progress -= 10;
        if(current_progress < 50){
            progress.classList.add("bg-warning");
            progress.style.width = current_progress+"%";
        }else{
            progress.style.width = current_progress+"%";
        }
        if(current_progress < 30){
            progress.classList.add("bg-danger");
            progress.style.width = current_progress+"%";
        }
        if(current_progress <= 0){
            current_progress = 0;
            window.clearInterval(interval);
            progress.classList.remove("bg-warning");
            progress.classList.remove("bg-danger");
            progress.style.width = current_progress +"%";
            getQuestionAndAnswers();
        }
}
function getPrevQuestionAndAnswers(){
    if (index < 20){
        results.style.display = "none";
        next.classList.remove("none");
        result.classList.add("none");
    }
    current_progress = 100;
    window.clearInterval(interval);
    interval = null;
    progress.style.width = current_progress+"%";
    progress.classList.remove("bg-warning");
    progress.classList.remove("bg-danger");
    if (index == 0){

    } else {
        index--;
    };

    question.innerHTML = preQuestions[index].question;

    for (let i=0; i < answers.length; i++){
        if (preQuestions[index].answers[i] == undefined){
            answers[i].style.display = "none";
        }else{
            answers[i].style.display = "block";
        questionIndex.innerHTML = (index)+1;
        answers[i].style.pointerEvents = "auto";
        answers[i].style.backgroundColor = "white";
        answers[i].innerHTML = preQuestions[index].answers[i];
    answers[i].addEventListener('click', doAction);
        }
    };
    if (answersTable[index] != undefined) {
        disableAnswers();
    }else {
        interval = setInterval(updateInterval,1000);
    }
    
}
function showResults(){
    if (answersTable[19] == undefined){
    }else {
        for (let i=0; i < userAnswers.length; i++){
            if (answersTable[i] == undefined){
                answersTable[i] = false;
                userAnswers[i].style.backgroundColor = "yellow";
            }
        }
        results.style.display = "block";
        localStorage.add('score', points);
    }
    
}
function retakeQuiz(){
    for (let i=0; i < userAnswers.length; i++){
        userAnswers[i].style.backgroundColor = "lightgrey";
    }
    window.clearInterval(interval);
    index = 0;
    points = 0;
    pointsElem.innerText = points;
    current_progress = 100;
    interval = undefined;
    next.classList.remove("none");
    result.classList.add("none");
    results.style.display = "none";

    answersTable = [];
    questionIndex.innerHTML = (index)+1;

    question.innerHTML = preQuestions[index].question;

    for (let i=0; i < answers.length; i++){
        answers[i].style.pointerEvents = "auto";
        answers[i].style.backgroundColor = "white";
        answers[i].innerHTML = preQuestions[index].answers[i];
        answers[i].addEventListener('click', doAction);
    }
    progress.style.width = current_progress+"%";
    interval = setInterval(updateInterval,1000);
}
function saveToLocalStorage(){
    if (localStorage.getItem("score") === null && localStorage.getItem("timesPlayed") === null){
        
    }
}