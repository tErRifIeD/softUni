function solve(args) {
    let oldDate = args[0];
    let sortedOldDate = oldDate.split('-').reverse().join('-');
    let date = new Date(sortedOldDate);

    date.setDate(date.getDate() + 1000);

    let newDate = ('0' + date.getDate()).slice(-2);
    let newMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    let newYear = ('0' + date.getFullYear()).slice(-4);

    let newDateFormat = `${newDate}-${newMonth}-${newYear}`;

    console.log(newDateFormat);
}

solve(['25-02-1995']);
solve(['07-11-2003']);