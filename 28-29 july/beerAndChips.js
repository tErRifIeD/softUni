function Solve(args) {
    let fanName = args[0];
    let budget = Number(args[1]);
    let beerBottles = Number(args[2]);
    let chipsPacks = Number(args[3]);

    let beerPrice = beerBottles * 1.2;
    let chipsPrice = Math.ceil(beerPrice * 0.45 * chipsPacks);
    let moneyNeeded = beerPrice + chipsPrice;

    if (moneyNeeded <= budget) {
        console.log(`${fanName} bought a snack and has ${(budget - moneyNeeded).toFixed(2)} leva left.`);
    } else {
        console.log(`${fanName} needs ${(moneyNeeded - budget).toFixed(2)} more leva!`)
    }
}

Solve(['George', 10, 2, 3]);
Solve(['Valentin', 5, 2, 4]);