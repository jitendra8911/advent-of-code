// inspired by https://repl.it/@BrianMoore1/AdventOfCode2020#Days/Days%2022-25/Day23.java

const testInput = '389125467';

const realInput = '247819356';

const parseInput = (input) => {
    const arr = [];
    for (let i = 0; i < input.length - 1; i++) {
        const num = parseInt(input[i]);
        const nextNum = parseInt(input[i+1]);
        arr[num] = nextNum;
    }

    return arr;
};

const pickDestination = (currCup, pickedCups, highestCup) => {
    let tempCup = currCup - 1 <= 0 ? highestCup : currCup - 1;
    if (!pickedCups.includes(tempCup)) {
        return tempCup;
    }
    while (pickedCups.includes(tempCup)) {
        tempCup = tempCup - 1 <= 0 ? highestCup : tempCup - 1;
    }

    return tempCup;
};

const play = (totalMoves, totalCups, cups, input) => {
    cups[input[input.length - 1]] = totalCups > 9 ? 10: parseInt(input[0]);
    for (let i = 10; i <= totalCups - 1; i++) {
        cups[i] = i+1;
    }
    if (totalCups > 9) {
        cups[totalCups] = parseInt(input[0]);
    }

    let currCup = input[0];
    for (let i = 1; i <= totalMoves; i++) {
        const a = cups[currCup];
        const b = cups[a];
        const c = cups[b];
        const dest = pickDestination(currCup, [a,b,c], totalCups);
        const tempNextToDest = cups[dest];
        cups[currCup] = cups[c];
        cups[dest] = a;
        cups[c] = tempNextToDest;
        currCup = cups[currCup];
    }
}

const part2Solution = (input, totalMoves, totalCups) => {
    const cups = parseInput(input);
    play(totalMoves, totalCups, cups, input);
    const cupNextTo1 = cups[1];
    const cupNextToNextTo1 = cups[cupNextTo1];

    return BigInt(BigInt(cupNextTo1) * BigInt(cupNextToNextTo1));
};

console.log(part2Solution(realInput, 10000000, 1000000));