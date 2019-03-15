let preQuestions = [];
let question;
let answers;
(function(){
    fetch('https://quiztai.herokuapp.com/api/quiz')
    	.then(resp => resp.json())
    	.then(resp => {
            console.log(resp)
               preQuestions = resp;
               question = document.querySelector('.question');
                answers = document.querySelectorAll('.list-group-item');
                question.innerHTML = preQuestions[index].question;

    for (let i=0; i < answers.length; i++){
        answers[i].innerHTML = preQuestions[index].answers[i];
    answers[i].addEventListener('click', doAction);
    }
    	})
})();
let next = document.querySelector('.next');
next.addEventListener('click', getQuestionAndAnswers);
let previous = document.querySelector('.previous');
previous.addEventListener('click', getPrevQuestionAndAnswers)

let results = document.querySelector('.results');



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
        saveToLocalStorage();
        result.classList.add("none");
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
        localStorage.setItem("score", points);
        localStorage.setItem("timesPlayed", 1);
        userScorePoint.innerHTML = points;
    }else {
        let scoreSum = localStorage.getItem("score");
        scoreSum = +scoreSum;
        console.log(typeof(scoreSum));
        scoreSum += points;
        let timesPlayed = localStorage.getItem("timesPlayed");
        timesPlayed = +timesPlayed;
        timesPlayed++;
        let average = scoreSum / timesPlayed;
        localStorage.setItem("score", scoreSum);
        localStorage.setItem("timesPlayed", timesPlayed);
        userScorePoint.innerHTML = average;
        console.log("ScoreSUm: " + scoreSum);
        console.log("timesPlayed: " + timesPlayed);
    }
}