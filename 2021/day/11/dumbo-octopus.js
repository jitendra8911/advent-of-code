import {testData, input, example} from "./input";

let flashes = {};

const findNeighbor = (arr, i, j, dir) => {
    if (arr[i + dir[0]] &&  (arr[i + dir[0]][j + dir[1]] !== undefined)) {
        return [i + dir[0],j + dir[1]];
    }
    return undefined;
};

const parseData = (data) => {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
         arr[i] = [];
         const row = data[i];
         for (let j = 0; j < row.length; j++) {
             arr[i][j] = parseInt(row[j]);
         }
    }

    return arr;
};

const incrementElement = (arr, i ,j) => {
    if (arr[i][j] === 0) {
        if (!flashes[`${i}_${j}`]) {
            arr[i][j] += 1;
        }
    } else if (arr[i][j] === 9) {
        arr[i][j] = 0;
    } else {
        arr[i][j] += 1;
    }
};

const incrementNeighbors = (arr, i, j) => {
    const left = findNeighbor(arr, i, j, [0, -1]);
    const right = findNeighbor(arr, i, j, [0, 1]);
    const top = findNeighbor(arr, i, j, [-1, 0]);
    const bottom = findNeighbor(arr, i, j, [1, 0]);
    const diag1 = findNeighbor(arr, i, j, [-1, -1]);
    const diag2 = findNeighbor(arr, i, j, [1, 1]);
    const diag3 = findNeighbor(arr, i, j, [1, -1]);
    const diag4 = findNeighbor(arr, i, j, [-1, 1]);

    const allDir = [left, right, top, bottom, diag1, diag2, diag3, diag4];

    for (let dir of allDir) {
        if (dir) {
            incrementElement(arr, dir[0], dir[1]);
            if (arr[dir[0]][dir[1]] === 0 && !flashes[`${dir[0]}_${dir[1]}`]) {
                flashes[`${dir[0]}_${dir[1]}`] = true;
                incrementNeighbors(arr, dir[0], dir[1]);
            }
        }
    }

};

const incrementArr = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            const ele = data[i][j];
            if (ele === 9) {
                if (!flashes[`${i}_${j}`]) {
                    flashes[`${i}_${j}`] = true;
                }
                data[i][j] = 0;
                incrementNeighbors(data, i, j);
            } else if (ele !== 0 || (ele === 0 && !flashes[`${i}_${j}`])){
                data[i][j] += 1;
            }
        }
    }


    return Object.keys(flashes).length;
};

const part1Sol = (data, n) => {
    const arr = parseData(data);
    let totalFlashes = 0;
    for (let i = 1; i <= n; i++) {
        flashes = {};
        incrementArr(arr);
        totalFlashes += Object.keys(flashes).length;
    }

    return totalFlashes;
};

const part2Sol = (data) => {
    const arr = parseData(data);
    let i = 0;
    while (true) {
        i++;
        flashes = {};
        incrementArr(arr);
        if (Object.keys(flashes).length === (arr[0].length * arr.length)) {
            return i;
        }
    }
}


console.log(part2Sol(input));