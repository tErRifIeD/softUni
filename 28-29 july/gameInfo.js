function Solve(args) {
    let teamName = args[0];
    let gameNumber = Number(args[1]);
    let additionalTime = 0,
        penalties = 0,
        gameDuration = 0;

    for (let i = 2; i < gameNumber + 2; i += 1) {
        gameDuration += +args[i];
        if (+args[i] > 120) {
            penalties += 1;
        } else if (+args[i] > 90) {
            additionalTime += 1;
        }
    }
    let averageTime = gameDuration / gameNumber;

    console.log(`${teamName} has played ${gameDuration} minutes. Average minutes per game: ${averageTime.toFixed(2)}`);
    console.log(`Games with penalties: ${penalties}`);
    console.log(`Games with additional time: ${additionalTime}`);
}

Solve(['England', 3, 95, 115, 123]);
Solve(['Croatia', 4, 93, 90, 120, 125]);
Solve(['Brazil', 2, 96, 115]);
