function Solve(args) {
    let budget = Number(args[0]);
    let stuffCount = Number(args[1]);

    for (let i = 2; i <= stuffCount + 2; i += 1) {
        if (args[i] === 'hoodie') {
            budget -= 30;
        } else if (args[i] === 'keychain') {
            budget -= 4;
        } else if (args[i] === 'T-shirt') {
            budget -= 20;
        } else if (args[i] === 'flag') {
            budget -= 15;
        } else if (args[i] === 'sticker') {
            budget -= 1;
        }
    }

    if (budget >= 0) {
        console.log(`You bought ${stuffCount} items and left with ${budget} lv.`);
    } else {
        console.log(`Not enough money, you need ${-budget} more lv.`);
    }
}

Solve([25, 3, 'flag', 'keychain', 'sticker']);
Solve([5, 2, 'hoodie', 'hoodie']);
