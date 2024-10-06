const questions = [
    {
        question: "How often do you feel stressed in your daily life?",
        answers: ["Rarely", "Sometimes", "Often", "Always", "Never"]
    },
    {
        question: "How would you describe your sleep quality?",
        answers: ["Excellent", "Good", "Average", "Poor", "Very Poor"]
    },
    {
        question: "How often do you feel anxious or worried?",
        answers: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
        question: "How well are you able to manage daily responsibilities?",
        answers: ["Very Well", "Well", "Average", "Poor", "Not at all"]
    },
    {
        question: "How often do you feel overwhelmed by your emotions?",
        answers: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    }
];

let currentQuestionIndex = 0;
let answers = [];


function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateResult();
    }
}

function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionObj.question;

    const answerButtons = document.getElementById('answer-buttons');
    const buttons = answerButtons.querySelectorAll('.btn');
    buttons.forEach((button, index) => {
        button.innerText = questionObj.answers[index];
        button.classList.remove('selected');
        button.onclick = () => selectAnswer(button, questionObj.answers[index]);
    });
}


function selectAnswer(button, answer) {
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('selected'));

    
    button.classList.add('selected');

    
    answers[currentQuestionIndex] = answer;
}


function calculateResult() {
    document.querySelector('.quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block'; 

    let score = 0;
    answers.forEach(answer => {
        if (answer === "Rarely" || answer === "Excellent" || answer === "Very Well" || answer === "Never") {
            score += 5;
        } else if (answer === "Sometimes" || answer === "Good" || answer === "Well") {
            score += 4;
        } else if (answer === "Average") {
            score += 3;
        } else if (answer === "Often" || answer === "Poor") {
            score += 2;
        } else if (answer === "Always" || answer === "Very Poor" || answer === "Not at all") {
            score += 1;
        }
    });

    let resultText = '';
    if (score >= 20) {
        resultText = "You are in great mental health!";
    } else if (score >= 15) {
        resultText = "Your mental health is good.";
    } else if (score >= 10) {
        resultText = "Your mental health is average.";
    }else if(score == 0){
        resultText = "Please Input Your Answer";
        document.getElementById("nothing").innerHTML = "Nothing Worry About!";
    }
    
    else {
        resultText = "You might need to focus on improving your mental health.";
    }

    document.getElementById('mentalState').innerText = resultText;
    document.getElementById("lastone").innerHTML = "According to your choice";
}


loadQuestion();
