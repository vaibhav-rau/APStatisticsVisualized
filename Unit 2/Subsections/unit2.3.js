document.addEventListener("DOMContentLoaded", function () {
    generateFlightData();
    generateScatterplot();
    generateResidualPlot();
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFlightData() {
    const data = { x: [], y: [], residuals: [] };
    const slope = 1.15;
    const intercept = 3.5;
    const tableBody = document.getElementById('data-table');
    
    for (let i = 0; i < 10; i++) {
        const x = generateRandomNumber(0, 100);
        const y = slope * x + intercept + generateRandomNumber(-10, 10);
        const residual = y - (slope * x + intercept);
        data.x.push(x);
        data.y.push(y);
        data.residuals.push(residual);

        // Add data to the table
        const row = document.createElement('tr');
        const cellX = document.createElement('td');
        cellX.textContent = x;
        const cellY = document.createElement('td');
        cellY.textContent = y.toFixed(2);
        const cellResidual = document.createElement('td');
        cellResidual.textContent = residual.toFixed(2);
        row.appendChild(cellX);
        row.appendChild(cellY);
        row.appendChild(cellResidual);
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
    document.getElementById('pattern').dataset.correct = "no";
    document.getElementById('model-indication').dataset.correct = "model is appropriate";
    document.getElementById('action').dataset.correct = "use the same model";
}

function generateResidualPlot() {
    const data = generateFlightData();

    const ctx = document.getElementById('residualPlotCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Residuals',
                data: data.x.map((x, i) => ({ x, y: data.residuals[i] })),
                backgroundColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: 'Flight Distance (km)' } },
                y: { title: { display: true, text: 'Residual' } }
            }
        }
    });
}

function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    // Check answers
    const pattern = document.getElementById('pattern').value;
    const modelIndication = document.getElementById('model-indication').value;
    const action = document.getElementById('action').value;

    const correctPattern = document.getElementById('pattern').dataset.correct;
    const correctModelIndication = document.getElementById('model-indication').dataset.correct;
    const correctAction = document.getElementById('action').dataset.correct;

    if (pattern === correctPattern) {
        answers.innerHTML += '<li>Correct! There is no visible pattern in the residuals.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. There is no visible pattern in the residuals.</li>';
    }

    if (modelIndication === correctModelIndication) {
        answers.innerHTML += '<li>Correct! The model is appropriate.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. The model is appropriate.</li>';
    }

    if (action === correctAction) {
        answers.innerHTML += '<li>Correct! You should use the same model.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. You should use the same model.</li>';
    }
}