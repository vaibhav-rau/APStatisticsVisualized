function checkAnswers() {
    var answers = document.getElementById('answers');
    answers.innerHTML = '';

    var dataQuestions = [
        { id: 'data1', correctAnswer: 'numerical' },
        { id: 'data2', correctAnswer: 'categorical' },
        { id: 'data3', correctAnswer: 'numerical' },
        { id: 'data4', correctAnswer: 'numerical' }
    ];

    dataQuestions.forEach(function(question) {
        var select = document.getElementById(question.id);
        var userAnswer = select.value.trim().toLowerCase();
        var li = document.createElement('li');

        if (userAnswer === question.correctAnswer) {
            li.textContent = 'Correct! "' + select.previousSibling.textContent.trim() + '" is ' + question.correctAnswer + ' data.';
            li.classList.add('correct');
        } else {
            li.textContent = 'Incorrect. "' + select.previousSibling.textContent.trim() + '" is ' + question.correctAnswer + ' data.';
            li.classList.add('incorrect');
        }
        answers.appendChild(li);
    });
}