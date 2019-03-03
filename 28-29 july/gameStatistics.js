function Solve(args) {
    let minutesPassed = Number(args[0]);
    let playerName = args[1];

    if (minutesPassed === 0) {
        console.log('Match has just began!');
    } else if (minutesPassed < 45) {
        console.log('First half time.');
    } else {
        console.log('Second half time.');
    }

    if (minutesPassed > 1 && minutesPassed <= 10) {
        console.log(`${playerName} missed a penalty.`);
        if (minutesPassed % 2 === 0) {
            console.log(`${playerName} was injured after the penalty.`);
        }
    } else if (minutesPassed > 10 && minutesPassed <= 35) {
        console.log(`${playerName} received yellow card.`);
        if (minutesPassed % 2 != 0) {
            console.log(`${playerName} got another yellow card.`)
        }
    } else if (minutesPassed > 35 && minutesPassed < 45) {
        console.log(`${playerName} SCORED A GOAL !!!`);
    } else if (minutesPassed > 45 && minutesPassed <= 55) {
        console.log(`${playerName} got a freekick.`);
        if (minutesPassed % 2 === 0) {
            console.log(`${playerName} missed the freekick.`);
        }
    } else if (minutesPassed > 55 && minutesPassed <= 80) {
        console.log(`${playerName} missed a shot from corner.`);
        if (minutesPassed % 2 != 0) {
            console.log(`${playerName} has been changed with another player.`)
        }
    } else if (minutesPassed > 80 && minutesPassed <= 90) {
        console.log(`${playerName} SCORED A GOAL FROM PENALTY !!!`);
    }
}

Solve([85, 'Harry Kane']);
Solve([10, 'Messi']);
Solve([25, 'Ronaldo']);