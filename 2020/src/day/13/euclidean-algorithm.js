const realInput = '23,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,383,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,19,x,x,x,x,x,x,x,x,x,29,x,503,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37'
const testInput = '1789,37,47,1889';
// calculate b such that a * c = 2 (mod 13)

// repeatedly divide the divisor by the remainder until the remainder is 2

const parseInput = (input) => {
    const busIds = input.split(',');
    const mods = [];
    const offsets = [];

    for (let i = busIds.length - 1; i >= 0; i--) {
        const busId = parseInt(busIds[i]);
        if (!isNaN(busId)) {
            mods.push(parseInt(busId));
            offsets.push(busIds.length  - i);
        }
    }

    return  { mods, offsets, busIds };
};

const chineseRemainderTheorem = (mods, offsets) => {
    let total = 0n;
    const N = mods.reduce((acc, mod) =>  BigInt(acc) * BigInt(mod), 1n);
    for (let i = 0; i < mods.length; i++) {
        const ni = BigInt(N / BigInt(mods[i]));
        const xi = modularInverse(ni, mods[i]);
        total = BigInt(BigInt(total) + BigInt(BigInt(ni) * BigInt(xi) * BigInt(offsets[i])));
    }

    return BigInt(BigInt(total) % BigInt(N));
}

// using extended euclidean algorithm
// http://www-math.ucdenver.edu/~wcherowi/courses/m5410/exeucalg.html

const modularInverse = (a, c) => {
    let p0 = 0n;
    let p1 = 1n;
    let currRem = a;
    let prevRem = a;
    let divisor = c;
    let quotient = [];
    let i = 0;
    while (prevRem !== 0n) {
        i++;
        quotient.push(BigInt(BigInt(divisor) / BigInt(prevRem)));
        currRem = BigInt(BigInt(divisor) % BigInt(prevRem));
        // if (currRem !== 0n) {
        //     q1 = parseInt(prevRem / currRem)
        // }
        divisor = prevRem;
        prevRem = currRem;
        if (i > 2) {
            const tempP1 = p1;
            p1 = BigInt(BigInt((BigInt(p0) - BigInt((BigInt(p1) * BigInt(quotient[0]))))) % BigInt(c));
            quotient.shift();
            if (p1 < 0) {
                p1 = BigInt(p1) + BigInt(c);
            }
            p0 = tempP1;
        }
    }
    p1 = BigInt(BigInt((BigInt(p0) - BigInt((p1 * quotient[0])))) % BigInt(c));
    if (p1 < 0) {
        p1 = BigInt(p1) + BigInt(c);
    }

    return p1;
}

const part1Solution = (input) => {
    const { mods, offsets, busIds } = parseInput(input);

    const k = chineseRemainderTheorem(mods, offsets);

    return BigInt(BigInt(k) - BigInt(busIds.length));
};

console.log(part1Solution(realInput));