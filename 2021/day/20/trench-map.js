import {test_enhancement_algorithm, test_input_image, input_image, input_enhancement_algorithm} from "./input";

const parseData = (data) => {
    const lines = data.split('\n');
    const arr = []
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        arr[i] = [];
        for (let j = 0; j < line.length; j++) {
            if (line[j] === '#') {
                arr[i][j] = 1
            } else {
                arr[i][j] = 0;
            }
        }
    }

    return arr;
};

const findNeighbor = (arr, i, j, dir, infiniteSpaceLighted) => {
    if (arr[i + dir[0]] !== undefined &&  (arr[i + dir[0]][j + dir[1]] !== undefined)) {
        return arr[i + dir[0]][j + dir[1]];
    }
    return infiniteSpaceLighted ? 1: 0;
};

const findOutputImageAtPixel = (arr, i, j, enhancementAlgorithm, infiniteSpaceLighted) => {
    const topLeft = [-1,-1];
    const top = [-1,0];
    const topRight = [-1, 1];
    const left = [0, -1];
    const numberItself = [0,0];
    const right = [0,1];
    const bottomLeft = [1,-1];
    const bottom = [1,0];
    const bottomRight = [1,1];
    let index = "";
    const directions = [topLeft, top, topRight, left, numberItself, right, bottomLeft, bottom, bottomRight];
    for (let k = 0; k < directions.length; k++) {
        index += findNeighbor(arr, i, j, directions[k], infiniteSpaceLighted);
    }
    index = parseInt(index, 2);

    return enhancementAlgorithm[index] === '#' ? 1 : 0;
};

const part1Sol = (image, enhancementAlgorithm, iterations) => {
    const parsedImage = parseData(image);
    let currImage = JSON.parse(JSON.stringify(parsedImage));

    for (let i = 0; i < iterations; i++) {
        const infiniteSpaceLighted = i % 2 !== 0;
        const newImage = [];

        // add padding to matrix


        for (let j = 0; j < currImage.length; j++) {
            // add empty columns at the beginning and end of each row
            for (let repeat = 0; repeat < 1; repeat++) {
                currImage[j].unshift(infiniteSpaceLighted ? 1 : 0);
                currImage[j].push(infiniteSpaceLighted ? 1 : 0);
            }
        }
        const updatedNumberOfColumns = currImage[0].length;

        // add empty rows at the top and bottom of the image
        for (let repeat = 0; repeat < 1; repeat++) {
            currImage.unshift([]);
            currImage.push([]);
        }


        // fill the empty cells with 0

        for (let j = 0; j < currImage.length; j++) {
            for (let k = 0; k < updatedNumberOfColumns; k++) {
                if (currImage[j][k] === undefined) {
                    currImage[j][k] = infiniteSpaceLighted ? 1 : 0;
                }
            }
        }

        for (let j = 0; j < currImage.length; j++) {
            newImage[j] = [];
            for (let k = 0; k < currImage[j].length; k++) {
                newImage[j][k] = findOutputImageAtPixel(currImage, j, k, enhancementAlgorithm, infiniteSpaceLighted);
            }
        }


        //print_image(newImage);

        currImage = newImage;
    }

    let totalPixelsLit = 0;
    for (let i = 0; i < currImage.length; i++) {
        for (let j = 0; j < currImage[i].length; j++) {
            if (currImage[i][j] === 1) {
                totalPixelsLit++;
            }
        }
    }

    return totalPixelsLit;
};

const print_image = (image) => {
    for (let i = 0; i < image.length; i++) {
        let str = '';
        for (let j = 0; j < image[i].length; j++) {
            str = str + ((image[i][j] === 1) ? '#' : '.');
        }
        console.log(str);
    }
}

//part1Sol(test_input_image, test_enhancement_algorithm, 1);

//part1Sol(input_image, input_enhancement_algorithm, 2);
console.log(part1Sol(input_image, input_enhancement_algorithm, 50));

//console.log(part1Sol(test_input_image, test_enhancement_algorithm, 2));