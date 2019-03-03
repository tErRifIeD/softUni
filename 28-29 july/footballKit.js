function Solve(args) {
    let tshirtPr = Number(args[0]);
    let winningSum = Number(args[1]);

    let shortsPr = tshirtPr * 0.75;
    let socksPr = shortsPr * 0.20;
    let sneakersPr = (tshirtPr + shortsPr) * 2;

    let totalSum = (tshirtPr + shortsPr + socksPr + sneakersPr) * 0.85;

    if (totalSum >= winningSum) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(winningSum - totalSum).toFixed(2)} lv. more.`);
    }
}

Solve([25, 100]);
Solve([55, 310]);
Solve([59.99, 500]);