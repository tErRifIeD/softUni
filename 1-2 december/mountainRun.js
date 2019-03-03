function Solve(args) {
    var recordSecs = Number(args[0]);
    var distanceM = Number(args[1]);
    var climbingTime = Number(args[2]);

    var totalTime,
        timeDiff;
    
    var slowDown = Math.floor(distanceM / 50) * 30;
    totalTime = (distanceM * climbingTime) + slowDown;
    timeDiff = Math.abs(recordSecs - totalTime);

    if (recordSecs > totalTime) {
        console.log('Yes! The new record is ' + totalTime.toFixed(2) + ' seconds.');
    } else {
        console.log('No! He was ' + timeDiff.toFixed(2) + ' seconds slower.');
    }
};

Solve([10164, 1400, 25]);
Solve([5554.36, 1340, 3.23]);
Solve([1377, 389, 3]);
