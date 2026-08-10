const input = [67,
    118,
    90,
    41,
    105,
    24,
    137,
    129,
    124,
    15,
    59,
    91,
    94,
    60,
    108,
    63,
    112,
    48,
    62,
    125,
    68,
    126,
    131,
    4,
    1,
    44,
    77,
    115,
    75,
    89,
    7,
    3,
    82,
    28,
    97,
    130,
    104,
    54,
    40,
    80,
    76,
    19,
    136,
    31,
    98,
    110,
    133,
    84,
    2,
    51,
    18,
    70,
    12,
    120,
    47,
    66,
    27,
    39,
    109,
    61,
    34,
    121,
    38,
    96,
    30,
    83,
    69,
    13,
    81,
    37,
    119,
    55,
    20,
    87,
    95,
    29,
    88,
    111,
    45,
    46,
    14,
    11,
    8,
    74,
    101,
    73,
    56,
    132,
    23];

const input2 = [16,
    10,
    15,
    5,
    1,
    11,
    7,
    19,
    6,
    12,
    4];

const input3 = [28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3];

const part1Solution = (input) => {
    const adapters = input.sort((a,b) => a - b);
    let diff1 = 1;
    let diff2 = 1;
    for (let i = 1; i < adapters.length; i++) {
        if (adapters[i] - adapters[i-1] === 1) {
            diff1++;
        } else if (adapters[i] - adapters[i-1] === 3) {
            diff2++;
        }
    }

    return diff1 * diff2;
};

const part2Solution = (input) => {
    let totalDistinctWays = 1;
    const adapters = input.sort((a,b) => a - b);
    let prevDiff = 1;
    let contDiff1 = 0;
    for (let i = 1; i < adapters.length; i++) {
        const currDiff = adapters[i] - adapters[i-1];
        if (currDiff === 1) {
            if (prevDiff === 1) {
                contDiff1++;
            }
        } else if (currDiff === 3) {
            if (contDiff1 > 2) {
                totalDistinctWays = totalDistinctWays * (Math.pow(2, contDiff1) - 1);
            } else {
                totalDistinctWays = totalDistinctWays * (Math.pow(2, contDiff1));
            }
            contDiff1 = 0;
        }
        prevDiff = currDiff;
    }

    if (contDiff1 > 2) {
        totalDistinctWays = totalDistinctWays * (Math.pow(2, contDiff1) - 1);
    } else {
        totalDistinctWays = totalDistinctWays * (Math.pow(2, contDiff1));
    }

    return totalDistinctWays;

};

//console.log(part1Solution(input));

console.log(part2Solution((input)));