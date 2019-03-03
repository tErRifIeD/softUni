function Solve(args) {
    let distanceKm = Number(args[0]);
    let fuelConsumption = Number(args[1]);
    let fuelPrice = Number(args[2]);
    let moneyPrize = Number(args[3]);

    let totalPrice = fuelPrice * fuelConsumption * distanceKm / 100;

    if (moneyPrize >= totalPrice) {
        console.log(`You can go home. ${(moneyPrize - totalPrice).toFixed(2)} money left.`);
    } else {
        console.log(`Sorry, you cannot go home. Each will receive ${(moneyPrize / 5).toFixed(2)} money.`);
    }
}

Solve([100, 5, 1.2, 6]);
Solve([120, 5, 1.2, 4]);
Solve([100, 8, 1.2, 20]);
