function solve(args) {
    let l = Number(args[0]);
    let w = Number(args[1]);
    let columns = Math.floor(l / 1.2);
    let rows = Math.floor((w - 1) / 0.7);

    let totalDesks = (columns * rows) - 3;
    
    console.log(totalDesks);
}

solve([15, 8.9]);
solve([8.4, 5.2]);
