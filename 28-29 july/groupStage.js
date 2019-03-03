function Solve(args) {
    let teamName = args[0];
    let gamesPlayed = Number(args[1]);

    let goalsMade = 0;
    let goalsMissed = 0;
    let points = 0;
    let matchResult = 0;

    for (let i = 2; i < gamesPlayed * 2 + 1; i += 2) {
        if (+args[i] > +args[i + 1]) {
            points += 3;
        } else if (+args[i] === +args[i + 1]) {
            points += 1;
        }
        matchResult += +args[i];
        goalsMade += +args[i];
        matchResult -= +args[i + 1];
        goalsMissed += +args[i + 1];
    }

    if (goalsMade >= goalsMissed) {
        console.log(`${teamName} has finished the group phase with ${points} points.`);
        console.log(`Goal difference: ${matchResult}.`);
    } else {
        console.log(`${teamName} has been eliminated from the group phase.`);
        console.log(`Goal difference: ${matchResult}.`);
    }
}

Solve(['Brazil', 3, 4, 2, 0, 0, 1, 1]);
Solve(['Germany', 2, 0, 2, 1, 3]);
Solve(['Croatia', 4, 3, 2, 1, 1, 2, 0, 2, 1]);
