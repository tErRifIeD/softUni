function Solve(args) {
    let players = [],
        goals = [];

    for (let i = 0; i < args.length - 1; i += 2) {
        if (i != 'END' || args[i + 1] >= 10) {
            players.push(args[i]);
            goals.push(Number(args[i + 1]));
        }
    }
    let bestGoals = Math.max(...goals);
    let bestGoalIndex = goals.indexOf(bestGoals);
    let bestPlayer = players[bestGoalIndex];

    console.log(`${bestPlayer} is the best player!`);
    if (bestGoals >= 3) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}

Solve(['Neymar', 2, 'Ronaldo', 1, 'Messi', 3, 'END']);
Solve(['Silva', 5, 'Harry Kane', 10]);