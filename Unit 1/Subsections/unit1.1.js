function checkAnswers() {
    var answers = document.getElementById('answers');
    answers.innerHTML = '';

    var dataList = document.getElementById('dataList').children;
    for (var i = 0; i < dataList.length; i++) {
        var item = dataList[i].textContent.trim();
        var dataType = prompt('Is "' + item + '" categorical or numerical data?').toLowerCase();

        var li = document.createElement('li');
        if (dataType === 'categorical' || dataType === 'numerical') {
            li.textContent = 'Correct! "' + item + '" is ' + dataType + ' data.';
            li.classList.add('correct');
        } else {
            li.textContent = 'Incorrect. Please try again.';
            li.classList.add('incorrect');
        }
        answers.appendChild(li);
    }
}