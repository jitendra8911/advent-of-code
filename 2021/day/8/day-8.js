import {input, testData, example, example2} from "./input";

const parseInput = (input) => {
    const digits = [];
    const patterns = [];
    input.forEach(line => {
        const lineContent = line.split('|');
        digits.push(lineContent[1].trim().split(' '));
        patterns.push(lineContent[0].trim().split(' '));
    });

    return {digits, patterns};
};

const part1Sol = (data) => {
    const {digits} = parseInput(data);
    const flatternDigits = digits.flat();
    const count = flatternDigits.reduce((acc, digit) => {
        if ([2, 4, 3, 7].includes(digit.length)) {
            acc++;
        }

        return acc;
    }, 0);

    return count;
};

const part2Sol = (data) => {

    const {digits, patterns} = parseInput(data);
    let sum = 0;

    const allChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    const getDigitFromPositions = (positions) => {
        const sum = positions.reduce((acc, curr) => acc + curr, 0);
        if (positions.length === 2) {
            return 1;
        } else if (positions.length === 3) {
            return 7;
        } else if (positions.length === 4) {
            return 4;
        } else if (positions.length === 7) {
            return 8;
        } else if (sum === 14) {
            return 2;
        } else if (sum === 12) {
            return 3;
        } else if (sum === 16) {
            return 5;
        } else if (sum === 20) {
            return 6;
        } else if (sum === 17) {
            return 9;
        } else if (sum === 15) {
            return 0;
        }

        return sum;
    };



    // Algorithm

    // 1. Iterate through all the input data

    for (let i = 0; i < patterns.length; i++) {
        const posMap = {};
        const charsFoundSoFar = [];
        // 2. Group sequence of pattern by number of characters in each individual occurrence.
        const groups = patterns[i].reduce((acc, currSequenceOfPattern) => {
            const n = currSequenceOfPattern.length;
            if (acc[n]) {
                acc[n].push(currSequenceOfPattern);
            } else {
                acc[n] = [currSequenceOfPattern];
            }

            return acc;
        }, {});

        const signalWith3Chars = groups[3][0];
        const signalWith2Chars = groups[2][0];

        // 3. Difference of group with 2 chars and group with 3 chars is position 0
        for (let j = 0; j < signalWith3Chars.length; j++) {
            if (!signalWith2Chars.match(signalWith3Chars[j])) {
                posMap[signalWith3Chars[j]] = 0;
                charsFoundSoFar.push(signalWith3Chars[j]);
                break;
            }
        }

        // 4. Find common chars in group with 5 chars
        const charsCommonInGroupWith5Chars = [];
        const firstSignalInGroupWith5Chars = groups[5][0];
        for (let j = 0; j < firstSignalInGroupWith5Chars.length; j++) {
            const currChar = firstSignalInGroupWith5Chars[j];
            let isCurrCharCommon = true;
            for (let k = 1; k < groups[5].length; k++) {
                const currSignalInGroupWith5Chars = groups[5][k];
                if (!currSignalInGroupWith5Chars.match(currChar)) {
                    isCurrCharCommon = false;
                    break;
                }
            }
            if (isCurrCharCommon) {
                charsCommonInGroupWith5Chars.push(currChar);
            }
        }

        // 5. Find common chars in group with 6 chars


        const charsCommonInGroupWith6Chars = [];
        const firstSignalInGroupWith6Chars = groups[6][0];
        for (let j = 0; j < firstSignalInGroupWith6Chars.length; j++) {
            const currChar = firstSignalInGroupWith6Chars[j];
            let isCurrCharCommon = true;
            for (let k = 1; k < groups[6].length; k++) {
                const currSignalInGroupWith6Chars = groups[6][k];
                if (!currSignalInGroupWith6Chars.match(currChar)) {
                    isCurrCharCommon = false;
                    break;
                }
            }
            if (isCurrCharCommon) {
                charsCommonInGroupWith6Chars.push(currChar);
            }
        }

        // 6. Take group with chars. Identify chars that are not in group with 2 chars

        const charsNotInGroupWith2Chars = [];
        const signalWith4chars = groups[4][0];

        for (let j = 0; j < signalWith4chars.length; j++) {
            if (!signalWith2Chars.match(signalWith4chars[j])) {
                charsNotInGroupWith2Chars.push(signalWith4chars[j]);
            }
        }

        // 7. Identify the char from result above which is common in group with 5 chars. This is 6th position. The other non common char is 5th position.
        let charNotInGroupWith2CharsButInGroupWith5Chars;

        for (let j = 0; j < charsNotInGroupWith2Chars.length; j++) {
            if (charsCommonInGroupWith5Chars.includes(charsNotInGroupWith2Chars[j])) {
                posMap[charsNotInGroupWith2Chars[j]] = 6;
            } else {
                posMap[charsNotInGroupWith2Chars[j]] = 5;
            }
            charsFoundSoFar.push(charsNotInGroupWith2Chars[j]);
        }

        // 8. Take group with 6 chars. Identify common char that also exists in group with 2 chars

        for (let j = 0; j < signalWith2Chars.length; j++) {
            if (charsCommonInGroupWith6Chars.includes(signalWith2Chars[j])) {
                posMap[signalWith2Chars[j]] = 2;
            } else {
                posMap[signalWith2Chars[j]] = 1;
            }
            charsFoundSoFar.push(signalWith2Chars[j]);

        }

        // 9. Identify the left over common char in group with 6 chars that is not yet found

        for (let j = 0; j < charsCommonInGroupWith6Chars.length; j++) {
            if (!charsFoundSoFar.includes(charsCommonInGroupWith6Chars[j])) {
                posMap[charsCommonInGroupWith6Chars[j]] = 3;
                charsFoundSoFar.push(charsCommonInGroupWith6Chars[j]);
            }
        }

        // 10. The lsat position is the unfound char
        for (let j = 0; j < allChars.length; j++) {
            if (!charsFoundSoFar.includes(allChars[j])) {
                posMap[allChars[j]] = 4;
                charsFoundSoFar.push(allChars[j]);
                break;
            }
        }


        const outputSequence = digits[i];
        let digitValue = 0;
        let j = 0;
        for (let k = outputSequence.length - 1; k >= 0; k--) {
            const positions = [];
            for (let l = 0; l < outputSequence[k].length; l++) {
                const output = outputSequence[k];
                positions.push(posMap[output[l]])
            }
            const digit = getDigitFromPositions(positions);
            digitValue += Math.pow(10, j) * digit;
            j++;
        }

        if (digitValue > 9999) {
            console.log(`outlier found ${digitValue} data point is ${data[i]} i is ${i}`);
        }
        sum += digitValue;

    }

    return sum;


};

console.log(part2Sol(input));