function Solve(args) {
    let goTicketPr = Number(args[0]);
    let returnTicketPr = Number(args[1]);
    let ticketPrice = Number(args[2]);
    let matchCount = Number(args[3]);
    let discount = Number(args[4]);

    discount = discount / 100;

    let travelPrice = 6 * (goTicketPr + returnTicketPr) * (1 - discount);
    let matchPrice = 6 * matchCount * ticketPrice;
    let totalPrice = travelPrice + matchPrice;

    console.log(`Total sum: ${totalPrice.toFixed(2)} lv.`);
    console.log(`Each friend has to pay ${(totalPrice / 6).toFixed(2)} lv.`)
}

Solve([175, 280, 125, 5, 15]);
// Solve([8, 10000, 3.25]);
// Solve([9,9,9]);