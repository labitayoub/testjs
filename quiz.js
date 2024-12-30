const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

const questionElement = document.getElementById('question');
const scoreElement = document.getElementById('score');
const trueBtn = document.getElementById('true-btn');
const falseBtn = document.getElementById('false-btn');

trueBtn.addEventListener('click', () => answer(true));
falseBtn.addEventListener('click', () => answer(false));

let newQuestion = 0;
let score = 0;

function UpQuestions() {
    if (newQuestion < questions.length) {
        questionElement.textContent = questions[newQuestion].question;
    } else {
        questionElement.textContent = " Score " + score ;
        trueBtn.style.display = 'none';
        falseBtn.style.display = 'none';
    }
}

function answer(isTrue) {
    const currentQuestion = questions[newQuestion];
    if (isTrue === currentQuestion.answer) {
        score++;
    }
    newQuestion++;
    UpQuestions();
}