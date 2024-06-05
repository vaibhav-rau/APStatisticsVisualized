function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    const dataQuestions = [
        { id: 'measure1', correctAnswer: 'median' },
        { id: 'measure2', correctAnswer: 'mean' },
        { id: 'measure3', correctAnswer: 'median' }
    ];

    dataQuestions.forEach(function(question) {
        const select = document.getElementById(question.id);
        const userAnswer = select.value.trim().toLowerCase();
        const li = document.createElement('li');

        if (userAnswer === question.correctAnswer) {
            li.textContent = `Correct! The appropriate measure of center for this dataset is the ${question.correctAnswer}.`;
            li.classList.add('correct');
        } else {
            li.textContent = `Incorrect. The appropriate measure of center for this dataset is the ${question.correctAnswer}.`;
            li.classList.add('incorrect');
        }
        answers.appendChild(li);
    });
}