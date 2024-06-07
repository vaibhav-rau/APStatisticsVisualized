document.addEventListener("DOMContentLoaded", function () {
    generateQuestions();
});

function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    // Check answers
    const answer1 = document.getElementById('q1').value;
    const answer2 = document.getElementById('q2').value;
    const answer3 = document.getElementById('q3').value;

	
    if (answer1 === 'skr') {
        answers.innerHTML += '<li>Correct! Question 1 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Question 1 is wrong.</li>';
    }

    if (answer2 === '7.8') {
        answers.innerHTML += '<li>Correct! Question 2 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Question 2 is wrong.</li>';
    }

    if (answer3 === '3') {
        answers.innerHTML += '<li>Correct! Question 3 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Question 3 is wrong.</li>';
    }
}