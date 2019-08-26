function Solve(input) {
    let linesNum = Number(input.shift());
    let pattern = /^[\w\W]*([@*])(?<name>[A-Z][a-z]{2,})(\1): \[(?<ch1>[A-Za-z]{1})\]\|\[(?<ch2>[A-Za-z]{1})\]\|\[(?<ch3>[A-Za-z]{1})\]\|[ ]*$/g;

    for (let i = 0; i < linesNum; i++) {
        let currLine = pattern.exec(input[i]);

        if (currLine !== null) {
            let name = currLine.groups.name;
            let char1 = currLine.groups.ch1;
            let char2 = currLine.groups.ch2;
            let char3 = currLine.groups.ch3;

            let decryptedChar1 = char1.charCodeAt(0);
            let decryptedChar2 = char2.charCodeAt(0);
            let decryptedChar3 = char3.charCodeAt(0);

            console.log(`${name}: ${decryptedChar1} ${decryptedChar2} ${decryptedChar3}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

Solve(['3',
    '*Request*: [I]|[b]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);
Solve(['3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
]);