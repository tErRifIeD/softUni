function Solve(args) {
    var lastSector = String(args[0]);
    var startRows = Number(args[1]);
    var oddSeats = Number(args[2]);
        
    var sectors = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var seats = 0;

    var sectorIndex = sectors.indexOf(lastSector);

    for (let i = 0; i <= sectorIndex; i += 1) {
        for (let j = 1; j <= startRows; j += 1) {
            if (j % 2 == 0) {
                for (let k = 0; k < oddSeats + 2; k += 1) {
                    seats += 1;
                    console.log(sectors[i] + j + sectors[k].toLowerCase());
                }
            } else {
                for (let k = 0; k < oddSeats; k += 1) {
                    seats += 1;
                    console.log(sectors[i] + j + sectors[k].toLowerCase());
                }
            }
        }
        startRows += 1;
    }
    console.log(seats);
};

Solve(['B', 3, 2]);
// Solve(['C', 4, 2]);