document.addEventListener("DOMContentLoaded", function () {
    generateFlightData();
    generateScatterplot();
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFlightData() {
    const data = { x: [], y: [] };
    const slope = 1.15;
    const intercept = 3.5;
    const tableBody = document.getElementById('data-table');
    
    for (let i = 0; i < 10; i++) {
        const x = generateRandomNumber(0, 100);
        const y = slope * x + intercept + generateRandomNumber(-10, 10);
        data.x.push(x);
        data.y.push(y);

        // Add data to the table
        const row = document.createElement('tr');
        const cellX = document.createElement('td');
        cellX.textContent = x;
        const cellY = document.createElement('td');
        cellY.textContent = y.toFixed(2);
        row.appendChild(cellX);
        row.appendChild(cellY);
        tableBody.appendChild(row);
    }
    return data;
}

function generateScatterplot() {
    const data = generateFlightData();

    const ctx = document.getElementById('scatterplotCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Flight Data',
                data: data.x.map((x, i) => ({ x, y: data.y[i] })),
                backgroundColor: 'rgba(75, 192, 192, 1)'
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: 'Flight Distance (km)' } },
                y: { title: { display: true, text: 'Likelihood of Malfunction (%)' } }
            }
        }
    });

    // Store correct answers in data-correct attributes
    document.getElementById('slope').dataset.correct = "1.15";
    document.getElementById('intercept').dataset.correct = "3.5";
    document.getElementById('prediction').dataset.correct = "115%";
}

function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    // Check answers
    const slope = document.getElementById('slope').value;
    const intercept = document.getElementById('intercept').value;
    const prediction = document.getElementById('prediction').value;

    const correctSlope = document.getElementById('slope').dataset.correct;
    const correctIntercept = document.getElementById('intercept').dataset.correct;
    const correctPrediction = document.getElementById('prediction').dataset.correct;

    if (slope === correctSlope) {
        answers.innerHTML += '<li>Correct! The slope is ' + correctSlope + '.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. The slope is ' + correctSlope + '.</li>';
    }

    if (intercept === correctIntercept) {
        answers.innerHTML += '<li>Correct! The intercept is ' + correctIntercept + '.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. The intercept is ' + correctIntercept + '.</li>';
    }

    if (prediction === correctPrediction) {
        answers.innerHTML += '<li>Correct! The prediction is ' + correctPrediction + '.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. The prediction is ' + correctPrediction + '.</li>';
    }
}