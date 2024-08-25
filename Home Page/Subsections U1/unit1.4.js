function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    const dataQuestions = [
        { id: 'spread1', correctAnswer: 'interquartile range' },
        { id: 'spread2', correctAnswer: 'standard deviation' },
        { id: 'spread3', correctAnswer: 'range' }
    ];

    dataQuestions.forEach(function(question) {
        const select = document.getElementById(question.id);
        const userAnswer = select.value.trim().toLowerCase();
        const li = document.createElement('li');

        if (userAnswer === question.correctAnswer) {
            li.textContent = `Correct! The appropriate measure of spread for this dataset is ${question.correctAnswer}.`;
            li.classList.add('correct');
        } else {
            li.textContent = `Incorrect. The appropriate measure of spread for this dataset is ${question.correctAnswer}.`;
            li.classList.add('incorrect');
        }
        answers.appendChild(li);
    });
}