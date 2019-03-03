function Solve(args) {
    let guestCount = Number(args[0]);
    let budgetLimit = Number(args[1]);

    let sumNeeded = guestCount * 20;


    if (sumNeeded <= budgetLimit) {
        let restMoney = Math.round(budgetLimit - sumNeeded);
        let fireworks = Math.round(restMoney * 0.4);
        let charity = Math.round(restMoney - fireworks);
            console.log('Yes! ' + fireworks + ' lv are for fireworks and ' + charity + ' lv are for donation.');
    } else {
        let moneyNeeded = Math.round(sumNeeded - budgetLimit);
        console.log('They won\'t have enough money to pay the covert. They will need ' + moneyNeeded + ' lv more.');
    }
}

Solve([20, 1000]);