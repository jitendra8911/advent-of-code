import {input, example1, example2} from "./input";

const parseData = (data) => {
    const lines = data.split('\n');
    const cubes = [];
    let minX = Infinity;
    let maxX = Number.NEGATIVE_INFINITY;
    let minY = Infinity;
    let maxY = Number.NEGATIVE_INFINITY;
    let minZ = Infinity;
    let maxZ = Number.NEGATIVE_INFINITY;

    for (let i = 20; i < lines.length; i++) {
        const line = lines[i].split(' ');
        const signal = line[0];

        const dimensions = line[1].split(',');

        const xDimensions = dimensions[0].split('=');
        const xRange = xDimensions[1].split('..');
        const startX = parseInt(xRange[0]);
        const endX = parseInt(xRange[1]);

        minX = Math.min(startX, minX);
        maxX = Math.max(endX, maxX);

        const yDimensions = dimensions[1].split('=');
        const yRange = yDimensions[1].split('..');
        const startY = parseInt(yRange[0]);
        const endY = parseInt(yRange[1]);

        minY = Math.min(startY, minY);
        maxY = Math.max(endY, maxY);

        const zDimensions = dimensions[2].split('=');
        const zRange = zDimensions[1].split('..');
        const startZ = parseInt(zRange[0]);
        const endZ = parseInt(zRange[1]);

        minZ = Math.min(startZ, minZ);
        maxZ = Math.max(endZ, maxZ);


    }

    return {cubes, minX, maxX, minY, maxY, minZ, maxZ};
}


const part1Sol = (data) => {
    let startTime = Date.now();
    const {cubes, minX, maxX, minY, maxY} = parseData(data);
    let total = 0;
    let endTime = Date.now();
    console.log( (endTime - startTime) / 1000);

  // for (let i = minX; i <= maxX; i++) {
  //     if (!cubes[minX]) {
  //         continue;
  //     }
  //     for (let j = minY; j <= maxY; j++) {
  //         if (!cubes[i][j]) {
  //             continue;
  //         }
  //         total += cubes[i][j].size;
  //     }
  // }

  return total;
}

console.log(part1Sol(input));