isOutlier1=false;
isOutlier2=false;
isOutlier3=false;
zs2=0;

document.addEventListener("DOMContentLoaded", function () {
    generateQuestions();
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestions() {
    // Generate questions for percentiles
    const percentileData1 = generateRandomNumber(10, 99);
    const percentileData2 = generateRandomNumber(10, 99);
    const percentileData3 = generateRandomNumber(1, 50);

    document.getElementById('percentileQuestion1').textContent = `Given a dataset of 100 airplane flight speeds, if a plane's speed is at the ${percentileData1}th percentile, how many planes have a slower speed?`;
    document.getElementById('percentileQuestion2').textContent = `Given a dataset of 100 airplane altitudes, if a plane's altitude is at the ${percentileData2}th percentile, how many planes are flying at a higher altitude?`;
    document.getElementById('percentileQuestion3').textContent = `Given a dataset with 50 planes, what is the percentile rank of the plane with the ${percentileData3}th highest speed?`;

    // Store correct answers for percentiles
    document.getElementById('percentile1').dataset.correct = percentileData1;
    document.getElementById('percentile2').dataset.correct = percentileData2;
    document.getElementById('percentile3').dataset.correct = percentileData3;

    // Generate questions for z-scores
    const zscoreData1 = generateRandomNumber(1, 10);
    const zscoreData2 = generateRandomNumber(0, 50)*1000;
    const zscoreData3 = generateRandomNumber(1, 10);

    document.getElementById('zscoreQuestion1').textContent = `Given a dataset with an average flight speed of 500 mph and a standard deviation of 50 mph, what is the z-score of a plane flying at a speed ${500 + zscoreData1 * 50} mph?`;
    document.getElementById('zscoreQuestion2').textContent = `Given a dataset with an average altitude of 30,000 feet and a standard deviation of 2,000 feet, what is the z-score of a plane flying at an altitude ${zscoreData2} feet?`;
    document.getElementById('zscoreQuestion3').textContent = `Given a dataset with an average flight time of 6 hours and a standard deviation of 0.5 hours, what is the z-score of a flight that lasts ${6 + zscoreData3 * 0.5} hours?`;

    // Store correct answers for z-scores
    document.getElementById('zscore1').dataset.correct = zscoreData1;
    zs2=(zscoreData2-30000)/2000;
    document.getElementById('zscore3').dataset.correct = zscoreData3;

    // Generate questions for outliers
    const outlierData1 = generateRandomNumber(1, 30)*1000;
    const outlierData2 = generateRandomNumber(1, 30)*1000;
    const outlierData3 = generateRandomNumber(1, 30)*1000;

    document.getElementById('outlierQuestion1').textContent = `Given a dataset with an standard deviation of 5000 feet, is a plane flying ${outlierData1} feet above the mean considered an outlier?`;
    document.getElementById('outlierQuestion2').textContent = `Given a dataset with a median of 20000 feet and an interquartile range of 5000 feet, is a plane flying at ${outlierData2} feet considered an outlier?`;
    document.getElementById('outlierQuestion3').textContent = `Given a dataset with an interquartile range of 10000 feet, is a plane flying ${outlierData3} feet above the mean considered an outlier?`;

    // Store correct answers for outliers
    if(outlierData1>10000){
		isOutlier1=true;
	}
	if(Math.abs(outlierData2-20000)>7500){
		isOutlier2=true;
	}
	if(outlierData3>15000){
		isOutlier3=true;
	}
}

function checkAnswers() {
    const answers = document.getElementById('answers');
    answers.innerHTML = '';

    // Check percentiles answers
    const percentile1 = parseInt(document.getElementById('percentile1').value, 10);
    const percentile2 = parseInt(document.getElementById('percentile2').value, 10);
    const percentile3 = parseInt(document.getElementById('percentile3').value, 10);

    const correctPercentile1 = parseInt(document.getElementById('percentile1').dataset.correct, 10);
    const correctPercentile2 = parseInt(document.getElementById('percentile2').dataset.correct, 10);
    const correctPercentile3 = parseInt(document.getElementById('percentile3').dataset.correct, 10);

    if (percentile1 === correctPercentile1-1) {
        answers.innerHTML += '<li>Correct! Percentile question 1 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Percentile question 1 is wrong.</li>';
    }

    if (percentile2 === 100-correctPercentile2-1) {
        answers.innerHTML += '<li>Correct! Percentile question 2 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Percentile question 2 is wrong.</li>';
    }

    if (percentile3 === correctPercentile3*2) {
        answers.innerHTML += '<li>Correct! Percentile question 3 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Percentile question 3 is wrong.</li>';
    }

    // Check z-scores answers
    const zscore1 = parseFloat(document.getElementById('zscore1').value);
    const zscore2 = parseFloat(document.getElementById('zscore2').value);
    const zscore3 = parseFloat(document.getElementById('zscore3').value);

    const correctZscore1 = parseFloat(document.getElementById('zscore1').dataset.correct);
    const correctZscore2 = parseFloat(document.getElementById('zscore2').dataset.correct);
    const correctZscore3 = parseFloat(document.getElementById('zscore3').dataset.correct);

    if (zscore1 === correctZscore1) {
        answers.innerHTML += '<li>Correct! Z-score question 1 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Z-score question 1 is wrong.</li>';
    }

    if (zscore2 === zs2) {
        answers.innerHTML += '<li>Correct! Z-score question 2 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Z-score question 2 is wrong.</li>';
    }

    if (zscore3 === correctZscore3) {
        answers.innerHTML += '<li>Correct! Z-score question 3 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Z-score question 3 is wrong.</li>';
    }

    // Check outliers answers
    const outlier1 = document.getElementById('outlier1').value;
    const outlier2 = document.getElementById('outlier2').value;
    const outlier3 = document.getElementById('outlier3').value;

    correctOutlier1 = 'no';
	if (isOutlier1){
		correctOutlier1='yes';
	}
    correctOutlier2 = 'no';
	if (isOutlier2){
		correctOutlier1='yes';
	}correctOutlier3 = 'no';
	if (isOutlier3){
		correctOutlier1='yes';
	}
	
    if (outlier1 === correctOutlier1) {
        answers.innerHTML += '<li>Correct! Outlier question 1 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Outlier question 1 is wrong.</li>';
    }

    if (outlier2 === correctOutlier2) {
        answers.innerHTML += '<li>Correct! Outlier question 2 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Outlier question 2 is wrong.</li>';
    }

    if (outlier3 === correctOutlier3) {
        answers.innerHTML += '<li>Correct! Outlier question 3 is correct.</li>';
    } else {
        answers.innerHTML += '<li>Incorrect. Outlier question 3 is wrong.</li>';
    }
}