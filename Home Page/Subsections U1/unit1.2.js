function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    const dataQuestions = [
        { id: 'graph1', correctAnswer: 'dot plot' },
        { id: 'graph2', correctAnswer: 'box plot' },
        { id: 'graph3', correctAnswer: 'histogram' }
    ];

    dataQuestions.forEach(function(question) {
        const select = document.getElementById(question.id);
        const userAnswer = select.value.trim().toLowerCase();
        const li = document.createElement('li');

        if (userAnswer === question.correctAnswer) {
            li.textContent = `Correct! The appropriate graph for this dataset is a ${question.correctAnswer}.`;
            li.classList.add('correct');
        } else {
            li.textContent = `Incorrect. The appropriate graph for this dataset is a ${question.correctAnswer}.`;
            li.classList.add('incorrect');
        }
        answers.appendChild(li);
    });
}