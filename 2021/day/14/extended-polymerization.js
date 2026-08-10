import {input, inputPolymer, testInput, testPolymer} from "./input";

const parseData = (data) => {
    const rules = {};
    for (let i = 0; i < data.length; i++) {
        const line = data[i].split('->');
        rules[line[0].trim()] = line[1].trim();
    }

    return rules;
};

const part1Sol = (data, polymer, n) => {
    const rules = parseData(data);
    let str = polymer;

    for (let i = 0; i < n; i++) {
        let pairedStr = '';
        for (let j = 0; j < str.length; j++) {
            pairedStr += str[j];
            if (str[j+1]) {
                const pair = rules[str[j] + str[j+1]];
                pairedStr += pair;
            }
        }

        str = pairedStr;
    }

    let countMap = {};
    for (let i = 0; i < str.length; i++) {
        countMap[str[i]] = countMap[str[i]] ? countMap[str[i]] + 1 : 1;
    }

    const sortedKeys = Object.keys(countMap).sort((key1, key2) => countMap[key1] - countMap[key2]);


    console.log(str);

    return (countMap[sortedKeys[sortedKeys.length - 1]] - countMap[sortedKeys[0]]);

};

console.log(part1Sol(testInput, testPolymer, 10));