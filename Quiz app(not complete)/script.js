const quizData = [
  {
    question: "How old is Andrew?",
    a: "15",
    b: "17",
    c: "19",
    d: "25",
    correct: "c",
  },
  {
    question: "What is the most used programming language",
    a: "JavaScript",
    b: "Java",
    c: "Python",
    d: "C",
    correct: "a",
  },
  {
    question: "Who is the president of US",
    a: "Andrew Gabaraev",
    b: "Joe Biden",
    c: "Donald Trump",
    d: "Obi Wan Kenobi",
    correct: "b",
  },
  {
    question: "What does HTML stand for",
    a: "Hypertext Markup Language",
    b: "Cascading style sheet",
    c: "Jason Object Notation",
    d: "Applictaion programming interface",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched",
    a: "2020",
    b: "2019",
    c: "2021",
    d: "none of the above",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;

let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  currentQuestion++;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2/>`;
    }
  }
});
