function Solve(args) {
    let fieldSize = args.shift();
    let positions = args.shift();
    positions = positions.split(' ').map(Number);

    console.log(positions);
}

Solve([ 3, '0 1',
'0 right 1',
'2 right 1' ]
);