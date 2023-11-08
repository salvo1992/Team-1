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

// Creare una varibile che contenga il punteggio finale del test.
const finalScore = 0;

// Creare variabile per tenere traccia del numero (o posizione) della domanda presentata all'utente.
const questionNumber = 0;

const questionContainer = document.querySelector("#question-container");
const questionText = document.querySelector("#question-text");
const answerBox = document.querySelector("#answer-box");
const displayCounter = document.querySelector("#counter");

// Quando questionNumber è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio.
//if (questionNumber.length > questions) {
// mostra finalScore
//}

const randomPicker = function () {
  const randomQuestion = Math.floor(Math.random() * questions.length);
  return questions[randomQuestion];
};
randomPicker();

const currentQuestion = randomPicker(questions);
console.log(currentQuestion);

questionText.innerText = `${currentQuestion.question}`;
//answerBox.innerHTML = `${currentQuestion.correct_answer} ${currentQuestion.incorrect_answers}`
const answersArr = [currentQuestion.correct_answer];
for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
  //let incorrectAnswer = currentQuestion.incorrect_answers[i];
  answersArr.push(currentQuestion.incorrect_answers[i]);
}
console.log(answersArr);

const shuffle = function (answerToRandomize) {
  for (let i = answersArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answersArr[i], answersArr[j]] = [answersArr[j], answersArr[i]];
  }
  return answersArr;
};

shuffle(answersArr);

for (let i = 0; i < answersArr.length; i++) {
  answerBox.innerHTML += `<input type="radio" name="contactChoice" value="${answersArr[i]}" />
  <label for="contactChoice1">${answersArr[i]}</label>`;
  console.log(answersArr[i]);
}
