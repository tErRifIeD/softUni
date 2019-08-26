function Solve(input) {
    let pattern = /:(?<words>[a-z]{4,}):[,.!?]*/g;
    let emojies = pattern.exec(input[0]);

    while (emojies !== null) {
        console.log(emojies.groups);
        emojies = pattern.exec(input[0]);
    }
}

Solve(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
]);