var questionText = document.getElementById("questions-here");
var answerText = document.getElementById("option");
var answerClick = document.getElementById("option");
var answerSubmit = document.getElementById("submit");
var nextQuestion = document.getElementById("next-qust");
var questions = [{
    question: "What is the capital city of Idaho?",
    options: [
        {a: "Sacramento", answer: false},
        {b: "Boise", answer: true},
        {c: "Twin Falls", answer: false},
        {d: "Nampa", answer: false}
    ],
},
{
    question: "What is the capital city of Montana?",
    options: [
        {a: "Helena", answer: true},
        {b: "Butte", answer: false},
        {c: "Rapid City", answer: false},
        {d: "Idaho Falls", answer: false}
    ],
},
{
    question: "What is the capital city of Oklahoma?",
    options: [
        {a: "Amarillo", answer: false},
        {b: "Tulsa", answer: false},
        {c: "Bartleville", answer: false},
        {d: "Oklahoma City", answer: true}
    ],
},
{
    question: "What is the capital city of North Dakota?",
    options: [
        {a: "Bismarck", answer: false},
        {b: "Jamestown", answer: true},
        {c: "Rugby", answer: false},
        {d: "Stanley", answer: false}
    ],
},
{
    question: "What is the capital city of Missouri?",
    answer: [
        {a: "Houston", answer: false},
        {d: "Columbia", answer: false},
        {c: "Jefferson City", answer: true},
        {d: "St. Louis", answer: false}
    ],
}
];
function startGame() {

}
// Add function to generate a question from array
function textQuestions() {
    questionText.innerText = questions[0].question;
    if (0 < questions.length) {
        nextQuestion.onClick = function(nextQst) {
            
        }
        console.log(questionText.innerText = questions[0].question);
    }
};

function textAnswers() {
    var buttonEl = document.createElement("button");
    buttonEl.innerText = options;
    buttonEl.className = btn-shape;
    console.log(buttonEl);
}
// Add a function for selections
// Add check to see if answer is correct
// Add a start quiz function
// Add a score and timer function
addEventListener("click", textQuestions);