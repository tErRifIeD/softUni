function Solve(args) {
    let width = Number(args[0]);
    let length = Number(args[1]);
    let height = Number(args[2]);

    let computers = 0;

    for (let i = 3; i < args.length; i += 1) {
        if (args[i] != 'Done') {
            computers += Number(args[i]);
        }
    }

    let totalSpace = width * height * length;

    if (totalSpace < computers) {
        console.log(`No more free space! You need ${computers - totalSpace} Cubic meters more.`);
    } else {
        console.log(`${totalSpace - computers} Cubic meters left.`);
    }

}

Solve([10, 10, 2, 20, 20, 20, 20, 122]);
Solve([10, 1, 2, 4, 6, 'Done']);
