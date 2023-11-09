const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

console.log(questions);
let finalScore = 0;
let questionNumber = 0;
let currentQuestion = null;

const questionContainer = document.querySelector("#question-container");
const questionText = document.querySelector("#question-text");
const answerBox = document.querySelector("#answer-box");
const nextButton = document.querySelector("#next-button");
const counterQuestion = document.querySelector("#counter");
let timerContainer = document.querySelector("#timer");

const initializeQuiz = function () {
  questionNumber = 0;
  finalScore = 0;
  currentQuestion = null;

  // Resetta lo stato "used" di tutte le domande
  for (let i = 0; i < questions.length; i++) {
    questions[i].used = false;
  }

  nextQuestion();
};

//let counter = 0;
//let timeout;
//const timer = function()
//{
//timerContainer = counter
//timeout = setTimeout(timer, 1000);
//counter ++
//if (counter === 10) {
//counter = 0;
//nextQuestion();
//} else if (unusedQuestions.length === 0) {
//return;
//}
//console.log(counter);
//}

//timerContainer.innerHTML = `<progress id="file" value="60" max="100"> </progress>`

const nextQuestion = function () {
  if (questionNumber < questions.length) {
    currentQuestion = randomPicker();

    questionText.innerText = `${currentQuestion.question}`;
    displayAnswers(currentQuestion);
    //timer()
  } else {
    // Mostra il punteggio finale quando tutte le domande sono state fatte
    const resultSpan = document.querySelector("#result");
    resultSpan.innerText = `Final Score: ${finalScore}`;
    nextButton.style.display = "none";
    questionContainer.style.display = "none";
    counterQuestion.style.display = "none";
    console.log("Final Score:", finalScore);
  }
};

const randomPicker = function () {
  let unusedQuestions = [];

  for (let i = 0; i < questions.length; i++) {
    if (!questions[i].used) {
      unusedQuestions.push(questions[i]);
      console.log(unusedQuestions);
    }
  }

  const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
  const selectedQuestion = unusedQuestions[randomIndex];
  selectedQuestion.used = true;
  counterQuestion.innerHTML = `QUESTION ${
    questions.length - (unusedQuestions.length - 1)
  } <span> / ${questions.length} </span>`;
  return selectedQuestion;
};

const displayAnswers = function (question) {
  answerBox.innerHTML = "";
  //uso spread e non concat() per comodita' di scrittura
  const answersArr = [question.correct_answer, ...question.incorrect_answers];
  shuffle(answersArr);

  for (let i = 0; i < answersArr.length; i++) {
    answerBox.innerHTML += `
      <input type="radio" name="contactChoice" value="${answersArr[i]}" />
      <label for="contactChoice1">${answersArr[i]}</label>
    `;
  }
};

const shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

nextButton.addEventListener("click", function () {
  const selectedAnswer = document.querySelector(
    'input[name="contactChoice"]:checked'
  );

  if (selectedAnswer) {
    if (selectedAnswer.value === currentQuestion.correct_answer) {
      finalScore++;
    }

    questionNumber++;
    nextQuestion();
  } else {
    alert("Select an answer to proceed with the next question.");
  }
});



// Inizializza
initializeQuiz();

