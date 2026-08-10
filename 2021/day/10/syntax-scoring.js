import {input, testData} from "./input";
const pointsMap = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
};
const pairs = {
    '}' : '{',
    ']' : '[',
    ')' : '(',
    '>' : '<'
};

const reversePairs = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
    '<' : '>'
};

const closingChars = Object.keys(pointsMap);

const part1Sol = (data) => {

    let score = 0;

    for (let i = 0; i < data.length; i++) {
        const stack = [];
        for (let j = 0; j < data[i].length; j++) {
            const char = data[i][j];
            if (closingChars.includes(char)) {
                if (stack[stack.length - 1] && stack[stack.length - 1] === pairs[char]) {
                    stack.pop();
                } else {
                    score += pointsMap[char];
                    break;
                }
            } else {
                stack.push(char);
            }
        }
    }

    return score;
};


const part2Sol = (data) => {
    const pointsMap = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4
    };
    const pointsTable = [];
    for (let i = 0; i < data.length; i++) {
        let score = 0;
        const stack = [];
        let corrupted = false;
        for (let j = 0; j < data[i].length; j++) {
            const char = data[i][j];
            if (closingChars.includes(char)) {
                if (stack[stack.length - 1] && stack[stack.length - 1] === pairs[char]) {
                    stack.pop();
                } else {
                    corrupted = true;
                    break;
                }
            } else {
                stack.push(char);
            }
        }
        if (!corrupted) {
            while (stack.length > 0) {
                const char = stack[stack.length - 1];
                const correspondingClosingChar = reversePairs[char];
                score = (score * 5) + pointsMap[correspondingClosingChar];
                stack.pop();
            }

            pointsTable.push(score);
        }
    }

    const midIndex = parseInt(pointsTable.length / 2);
    pointsTable.sort((a, b) => a - b);

    return pointsTable[midIndex];
};

console.log(part2Sol(input));