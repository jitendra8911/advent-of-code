import {testData, input} from "./input";

const parseData = (data) => {
    const heightMap = [];
    for (let i = 0; i < data.length; i++) {
        heightMap[i] = [];
        for (let j = 0; j < data[i].length; j++) {
            heightMap[i][j] = [parseInt(data[i][j]), false];
        }
    }

    return heightMap;
};

const findNeighbor = (arr, i, j, dir) => {
    if (arr[i + dir[0]] &&  (arr[i + dir[0]][j + dir[1]] !== undefined)) {
        return arr[i + dir[0]][j + dir[1]];
    }
    return [Infinity];
};

const isLowestNeighbor = (arr, i, j) => {
    const ele = arr[i][j];

    const left = findNeighbor(arr, i, j, [0, -1]);
    const right = findNeighbor(arr, i, j, [0, 1]);
    const top = findNeighbor(arr, i, j, [-1, 0]);
    const bottom = findNeighbor(arr, i, j, [1, 0]);

    return ele[0] < left[0] && ele[0] < right[0] && ele[0] < top[0] && ele[0] < bottom[0];
};

const part1Sol = (data) => {
    const heightMap = parseData(data);
    let total = 0;
    for (let i = 0; i < heightMap.length; i++) {
        for (let j = 0; j < heightMap[i].length; j++) {
            if (isLowestNeighbor(heightMap, i, j)) {
                total = total + heightMap[i][j][0] + 1;
            }
        }
    }

    return total;
};

const part2Sol = (data) => {
    const heightMap = parseData(data);
    const lowPoints = [];
    const basins = [];
    for (let i = 0; i < heightMap.length; i++) {
        for (let j = 0; j < heightMap[i].length; j++) {
            if (isLowestNeighbor(heightMap, i, j)) {
                lowPoints.push([i, j]);
            }
        }
    }

    const findSizeOfBasinRecursively = (i, j, currTotal) => {
        if (heightMap[i][j][1] === true) {
            return 0;
        }
        heightMap[i][j][1] = true;
        let total = currTotal;
        const left = findNeighbor(heightMap, i, j, [0, -1]);
        const right = findNeighbor(heightMap, i, j, [0, 1]);
        const top = findNeighbor(heightMap, i, j, [-1, 0]);
        const bottom = findNeighbor(heightMap, i, j, [1, 0]);

        if (left && !left[1] && left[0] !== Infinity && left[0] !== 9) {
            total += findSizeOfBasinRecursively(i, j - 1, 1);
        }

        if (right && !right[1] && right[0] !== Infinity && right[0] !== 9) {
            total += findSizeOfBasinRecursively(i, j + 1, 1);
        }

        if (top && !top[1] && top[0] !== Infinity && top[0] !== 9) {
            total += findSizeOfBasinRecursively(i - 1, j, 1);
        }

        if (bottom && !bottom[1] && bottom[0] !== Infinity && bottom[0] !== 9) {
            total += findSizeOfBasinRecursively(i + 1, j, 1);
        }


        return total;
    };

    for (let i = 0; i < lowPoints.length; i++) {
        basins.push(findSizeOfBasinRecursively(lowPoints[i][0], lowPoints[i][1], 1));
    }

    basins.sort((a, b) => b - a);

    return basins[0] * basins[1] * basins[2];
};

console.log(part1Sol(input));