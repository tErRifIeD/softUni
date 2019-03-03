function Solve(args) {
    let dividedParts = Number(args[0]);
    let pointMoney = Number(args[1]);
    let points = [];
    let totalPoints = 0;
    let totalSum = 0;

    for(let i = 2; i < dividedParts + 2; i += 1) {
        points.push(args[i]);
    }
    for(let i = 0; i < points.length; i += 1) {
        if ((i + 1) % 2 === 0) {
            points[i] *= 2;
        }
        totalPoints += +points[i];
    }
    totalSum += totalPoints * pointMoney;
    console.log(`The project prize was ${totalSum.toFixed(2)} lv.`);
}

Solve([7, 100.5, 2, 4, 5, 1, 1, 7, 3]);