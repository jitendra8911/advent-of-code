import {input, testData} from "./day-5";

const parseInput = (input) => {
    const lines = [];
    for (let i = 0; i < input.length; i++) {
        const line = input[i].split('->');
        const point1 = line[0].split(',');
        const point2 = line[1].split(',');
        const x1 = parseInt(point1[0]);
        const y1 = parseInt(point1[1]);
        const x2 = parseInt(point2[0]);
        const y2 = parseInt(point2[1]);
        lines.push({x1,y1, x2, y2})
    }

    return lines;
};

const countNumberOfIntersections = (lines) => {
    const pointsHashMap = {};
    for (let i = 0; i < lines.length; i++) {
        const x1 = lines[i]['x1'];
        const y1 = lines[i]['y1'];
        const x2 = lines[i]['x2'];
        const y2 = lines[i]['y2'];
        const x1_y1_key = `${x1}_${y1}`;
        const x2_y2_key = `${x2}_${y2}`;
        const x1_y1_count = pointsHashMap[x1_y1_key];
        const x2_y2_count = pointsHashMap[x2_y2_key];
        if (x1_y1_count) {
            pointsHashMap[x1_y1_key] = pointsHashMap[x1_y1_key] + 1;
        } else {
            pointsHashMap[x1_y1_key] = 1;
        }

        if (x2_y2_count) {
            pointsHashMap[x2_y2_key] = pointsHashMap[x2_y2_key] + 1;
        } else {
            pointsHashMap[x2_y2_key] = 1;
        }

        // increment counts of all the points on the line

        if (x1 === x2) {
            const min = Math.min(y1, y2);
            const max = Math.max(y1, y2);

            for (let j = min + 1; j < max; j++) {
                const intesectionPointKey = `${x1}_${j}`;
                if (pointsHashMap[intesectionPointKey]) {
                    pointsHashMap[intesectionPointKey] = pointsHashMap[intesectionPointKey] + 1;
                } else {
                    pointsHashMap[intesectionPointKey] = 1;
                }
            }
        }


        else if (y1 === y2) {
            const min = Math.min(x1, x2);
            const max = Math.max(x1, x2);

            for (let j = min + 1; j < max; j++) {
                const intesectionPointKey = `${j}_${y1}`;
                if (pointsHashMap[intesectionPointKey]) {
                    pointsHashMap[intesectionPointKey] = pointsHashMap[intesectionPointKey] + 1;
                } else {
                    pointsHashMap[intesectionPointKey] = 1;
                }
            }
        }

        // handle horizontal lines

        else {
            const xmin = Math.min(x1, x2);
            const xmax = Math.max(x1, x2);
            const ymin = Math.min(y1, y2);
            const ymax = Math.max(y1, y2);

            for (let j = xmin + 1; j < xmax; j++) {
                for (let k = ymin + 1; k < ymax; k++) {
                    if ((Math.abs(k - y1)/ Math.abs(j - x1) === 1) && (Math.abs(k - y2)/ Math.abs(j - x2) === 1)) {
                        const intesectionPointKey = `${j}_${k}`;
                        if (pointsHashMap[intesectionPointKey]) {
                            pointsHashMap[intesectionPointKey] = pointsHashMap[intesectionPointKey] + 1;
                        } else {
                            pointsHashMap[intesectionPointKey] = 1;
                        }
                    }
                }
            }
        }
    }


    return pointsHashMap;
}

const part1Sol = (input) => {
    const lines = parseInput(input);
    const filteredLines = lines.filter(line => (line.x1 === line.x2) || (line.y1 === line.y2));

    const pointsHashMap = countNumberOfIntersections(filteredLines);

    return Object.keys(pointsHashMap).filter(key => pointsHashMap[key] >= 2).length
    console.log(filteredLines);
};

const part2Sol = (input) => {
    const lines = parseInput(input);
    const filteredLines = lines.filter(line => {
        return (line.x1 === line.x2) || (line.y1 === line.y2) || ((Math.abs(line.y2 - line.y1) / Math.abs(line.x2 - line.x1) === 1))
    });

    const pointsHashMap = countNumberOfIntersections(filteredLines);

    return Object.keys(pointsHashMap).filter(key => pointsHashMap[key] >= 2).length
    console.log(filteredLines);
}

console.log(part2Sol(input));