const questions = [
    {
        question: "Who is considered the creator of the universe in Hinduism?",
        options: ["Brahma", "Vishnu", "Shiva", "Lakshmi"],
        answer: "Brahma"
    },
    {
        question: "Which epic is known as the longest epic poem in the world?",
        options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Upanishads"],
        answer: "Mahabharata"
    },
    {
        question: "What is the holy river in Hinduism?",
        options: ["Yamuna", "Ganga", "Krishna", "Kaveri"],
        answer: "Ganga"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerHTML = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.onclick = checkAnswer;
        optionsElement.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.innerHTML;
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerHTML = ${score} / ${questions.length};
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

// Start quiz
loadQuestion();