function Solve(args) {
    var budget = Number(args[0]);
    var chosenCity = String(args[1]);
    var sleepDays = Number(args[2]);
    var totalPrice = 0;

    switch (chosenCity) {
        case 'Cairo':
            if (sleepDays >= 1 && sleepDays <= 4) {
                totalPrice = (2 * 250 * sleepDays + 600) * 0.97;
            } else if (sleepDays >= 5 && sleepDays <= 9) {
                totalPrice = (2 * 250 * sleepDays + 600) * 0.95;
            } else if (sleepDays >= 10 && sleepDays <= 24) {
                totalPrice = (2 * 250 * sleepDays + 600) * 0.9;
            } else if (sleepDays >= 25 && sleepDays <= 49) {
                totalPrice = (2 * 250 * sleepDays + 600) * 0.83;
            } else if (sleepDays >= 50) {
                totalPrice = (2 * 250 * sleepDays + 600) * 0.7;
            }
            break;
        case 'Paris':
            if (sleepDays >= 5 && sleepDays <= 9) {
                totalPrice = (2 * 150 * sleepDays + 350) * 0.93;
            } else if (sleepDays >= 10 && sleepDays <= 24) {
                totalPrice = (2 * 150 * sleepDays + 350) * 0.88;
            } else if (sleepDays >= 25 && sleepDays <= 49) {
                totalPrice = (2 * 150 * sleepDays + 350) * 0.78;
            } else if (sleepDays >= 50) {
                totalPrice = (2 * 150 * sleepDays + 350) * 0.7;
            } else {
                totalPrice = (2 * 150 * sleepDays + 350);
            }
            break;
        case 'Lima':
            if (sleepDays >= 25 && sleepDays <= 49) {
                totalPrice = (2 * 400 * sleepDays + 850) * 0.81;
            } else if (sleepDays >= 50) {
                totalPrice = (2 * 400 * sleepDays + 850) * 0.7;
            } else {
                totalPrice = (2 * 400 * sleepDays + 850);
            }
            break;
        case 'New York':
            if (sleepDays >= 1 && sleepDays <= 4) {
                totalPrice = (2 * 300 * sleepDays + 650) * 0.97;
            } else if (sleepDays >= 5 && sleepDays <= 9) {
                totalPrice = (2 * 300 * sleepDays + 650) * 0.95;
            } else if (sleepDays >= 10 && sleepDays <= 24) {
                totalPrice = (2 * 300 * sleepDays + 650) * 0.88;
            } else if (sleepDays >= 25 && sleepDays <= 49) {
                totalPrice = (2 * 300 * sleepDays + 650) * 0.81;
            } else if (sleepDays >= 50) {
                totalPrice = (2 * 300 * sleepDays + 650) * 0.7;
            }
            break;
        case 'Tokyo':
            if (sleepDays >= 10 && sleepDays <= 24) {
                totalPrice = (2 * 350 * sleepDays + 700) * 0.88;
            } else if (sleepDays >= 25 && sleepDays <= 49) {
                totalPrice = (2 * 350 * sleepDays + 700) * 0.83;
            } else if (sleepDays >= 50) {
                totalPrice = (2 * 350 * sleepDays + 700) * 0.7;
            } else {
                totalPrice = (2 * 350 * sleepDays + 700);
            }
            break;
    };

    if (budget >= totalPrice) {
        console.log('Yes! You have ' + (budget - totalPrice).toFixed(2) + ' leva left.');
    } else {
        console.log('Not enough money! You need ' + (totalPrice - budget).toFixed(2) + ' leva.');
    }
};

Solve([5000, 'New York', 8]);