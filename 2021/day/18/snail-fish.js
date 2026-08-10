import {input, example1, example2, example3, example4, example5, example6, simpleExample} from "./input";

let rightNeighborAddress;
let leftNeighborAddress;
let leftNeighborAddressed;
let rightNeighborAddressed;
let explodingPairAddress;
let explodingPairFound;
let splitCompleted;

const reduce = (snailfish) => {
    rightNeighborAddress = [];
    leftNeighborAddress = [];
    leftNeighborAddressed = false;
    rightNeighborAddressed = false;
    explodingPairAddress = [];
    explodingPairFound = false;
    splitCompleted = false;

    findExplodingPair(snailfish, 0, []);

    if (explodingPairFound) {
        snailfish = explode(snailfish, leftNeighborAddress, explodingPairAddress, rightNeighborAddress);
       // console.log('snailfish after explosion is ', printSnailfish(snailfish));
        snailfish = reduce(snailfish);
    }
    snailfish = split(snailfish);
    if (splitCompleted) {
       // console.log('snailfish after splitting is ', printSnailfish(snailfish));
        reduce(snailfish);
    }
    return snailfish;
};

const explode = (snailfish, leftNeighborAddress, explodingPairAddress, rightNeighborAddress) => {
    let currSnailfish = snailfish;
    for (let i = 0; i < explodingPairAddress.length - 1; i++) {
        currSnailfish = currSnailfish[explodingPairAddress[i]];
    }
    const explodingPairIndex = explodingPairAddress[explodingPairAddress.length - 1];
    const explodingPair = currSnailfish[explodingPairIndex];
    currSnailfish[explodingPairIndex] = 0;


    currSnailfish = snailfish;
    for (let i = 0; i < leftNeighborAddress.length - 1; i++) {
        currSnailfish = currSnailfish[leftNeighborAddress[i]];
    }
    const leftIndex = leftNeighborAddress[leftNeighborAddress.length - 1];
    if (leftIndex !== undefined) {
        currSnailfish[leftIndex] = currSnailfish[leftIndex] + explodingPair[0];
    }

    currSnailfish = snailfish;
    for (let i = 0; i < rightNeighborAddress.length - 1; i++) {
        currSnailfish = currSnailfish[rightNeighborAddress[i]];
    }
    const rightIndex = rightNeighborAddress[rightNeighborAddress.length - 1];
    if (rightIndex !== undefined) {
        currSnailfish[rightIndex] = currSnailfish[rightIndex] + explodingPair[1];
    }


    return snailfish;
};

const findExplodingPair = (snailfish, depth, indices) => {
    if (depth >= 4 && Array.isArray(snailfish) && !isNaN(snailfish[0] && !isNaN(snailfish[1])) && explodingPairAddress.length === 0) {
        explodingPairAddress = indices;
        leftNeighborAddressed = true;
        explodingPairFound = true;
        return;
    } else if (!Array.isArray(snailfish)) {
        if (explodingPairAddress.length > 0) {
            rightNeighborAddressed = true;
            rightNeighborAddress = indices;
        } else {
            leftNeighborAddress = indices;
        }

        return;
    }
    for (let i = 0; i < snailfish.length; i++) {
        findExplodingPair(snailfish[i], depth + 1, [...indices, i]);
        if (leftNeighborAddressed && explodingPairFound && rightNeighborAddressed) {
            return;
        }
    }
};

const split = (snailfish) => {
    if (!Array.isArray(snailfish)) {
        if (snailfish >= 10) {
            const leftElement = Math.floor(snailfish / 2);
            const rightElement = Math.ceil(snailfish / 2);
            splitCompleted = true;

            return [leftElement, rightElement]
        } else {
            return snailfish
        }
    }
    for (let i = 0; i < snailfish.length; i++) {
        snailfish[i] = split(snailfish[i]);
        if (splitCompleted) {
            break;
        }
    }

    return snailfish
};


const printSnailfish = (snailfish) => {
    if (!Array.isArray(snailfish)) {
        return snailfish;
    }
    let currstr = '[';
    for (let i = 0; i < snailfish.length; i++) {
        currstr = currstr + printSnailfish(snailfish[i]);
        currstr += ','
    }

    return currstr.slice(0, currstr.length - 1) + ']'
};

const findSumRecursively = (snailfish) => {
    if (!Array.isArray(snailfish)) {
        return snailfish;
    }

    const leftSum = 3 * findSumRecursively(snailfish[0]);
    const rightSum = 2 * findSumRecursively(snailfish[1]);
    return leftSum + rightSum;
};

const part1Sol = (data) => {
    let snailfish;
    for (let i = 0; i < data.length; i++) {
        if (!snailfish) {
            snailfish = data[i];
        } else {
            snailfish = [snailfish, data[i]]
        }
        snailfish = reduce(snailfish);
    }

    return findSumRecursively(snailfish);
};

const part2Sol = (data) => {
    let largestSum = Number.NEGATIVE_INFINITY;
    let x = 0;
    let y = 0;
    for (let i = 0; i < data.length; i++) {
        const reducedsnailfish = reduce(JSON.parse(JSON.stringify(data[i])));
        for (let j = 0; j < data.length; j++) {
            if (i === j) {
                continue;
            }
            const combinedSnailfish = reduce([JSON.parse(JSON.stringify(reducedsnailfish)), JSON.parse(JSON.stringify(data[j]))]);
            const sum = findSumRecursively(combinedSnailfish);
            if (largestSum < sum) {
                largestSum = sum;
                x = i;
                y = j;
            }
        }
    }

    for (let i = 0; i < data.length; i++) {
        console.log(printSnailfish(data[i]))
    }
    return largestSum;

};




//const sum = part1Sol(input);
const sum = part2Sol(input);
console.log(sum);