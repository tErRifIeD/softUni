function Solve(args) {
    let hallSide1 = Number(args[0]);
    let hallSide2 = Number(args[1]);
    let barSide = Number(args[2]);

    let hallSize = hallSide1 * hallSide2;
    let barSize = barSide * barSide;
    let dancing = hallSize * 0.19;

    let guests = Math.ceil((hallSize - barSize - dancing) / 3.2);

    console.log(guests);
}

guestChecker(50, 25, 2);