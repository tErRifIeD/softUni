function Solve(args) {
    var months = Number(args[0]);
    var electricPM = [];

    var electricity = 0,
        water = 0,
        internet = 0,
        other = 0,
        average;

    for (let i = 0; i < months; i += 1) {
        electricPM.push(args[i+1]);
        electricity += +electricPM[i];
    }

    water = months * 20;
    internet = months * 15;
    other = (electricity + water + internet) * 1.2;
    average = (electricity + water + internet + other) / months;

    console.log('Electricity: ' + electricity.toFixed(2) + ' lv'); 
    console.log('Water: ' + water.toFixed(2) + ' lv');
    console.log('Internet: ' + internet.toFixed(2) + ' lv');
    console.log('Other: ' + other.toFixed(2) + ' lv');
    console.log('Average: ' + average.toFixed(2) + ' lv');
};

// Solve([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
Solve([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);

