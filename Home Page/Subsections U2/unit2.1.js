document.addEventListener("DOMContentLoaded", function () {
    generateQuestions();
});

function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    // Check answers
    const answer1 = document.getElementById('q1').value;

	
    if (answer1 === 'positive') {
        answers.innerHTML += '<li>Correct! Question 1 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Question 1 is wrong.</li>';
    }
}