import {input, example1, example2, example3} from './input';

const parseData = (data) => {
  const map = {};
  for (let i = 0; i < data.length; i++) {
      const line = data[i].split('-');
      if (map[line[0]]) {
          map[line[0]].push(line[1]);
      } else {
          map[line[0]] = [line[1]];
      }


      if (map[line[1]]) {
          map[line[1]].push(line[0]);
      } else {
          map[line[1]] = [line[0]];
      }
  }

  return map;
};

const part1Sol = (data) => {
    let total = 0;
    const map = parseData(data);


    const findDestinationRecursively = (map, key, pathMap, path) => {
        const allNeighbors = map[key];
        for (let i = 0; i < allNeighbors.length; i++) {
            const neighbor = allNeighbors[i];
            if (neighbor === 'end') {
                total++;
                console.log(`path is ${path},end`);
            } else {
                if (neighbor.toLowerCase() === neighbor && pathMap[neighbor] === 1) {
                    continue;
                }
                const count = pathMap[neighbor] ? pathMap[neighbor] + 1 : 1;
                findDestinationRecursively(map, neighbor, {...pathMap, [neighbor]: count}, [...path, neighbor]);
            }
        }
    };

    findDestinationRecursively(map, 'start', {'start': 1}, ['start']);

    return total;

};

const part2Sol = (data) => {
    let total = 0;
    const map = parseData(data);


    const findDestinationRecursively = (map, key, pathMap, path, smallCaveQuotaReached) => {
        const allNeighbors = map[key];
        for (let i = 0; i < allNeighbors.length; i++) {
            const neighbor = allNeighbors[i];
            if (neighbor === 'end') {
                total++;
                console.log(`${path},end`);
            } else {
                if (neighbor.toLowerCase() === neighbor) {
                    if (neighbor === 'start' || (smallCaveQuotaReached && pathMap[neighbor] >= 1) || (!smallCaveQuotaReached && pathMap[neighbor] >= 2)) {
                        continue;
                    }
                }
                const count = pathMap[neighbor] ? pathMap[neighbor] + 1 : 1;
                if (neighbor.toLowerCase() === neighbor && count > 1) {
                    findDestinationRecursively(map, neighbor, {...pathMap, [neighbor]: count}, [...path, neighbor], true);
                } else {
                    findDestinationRecursively(map, neighbor, {...pathMap, [neighbor]: count}, [...path, neighbor], smallCaveQuotaReached);
                }
            }
        }
    };

    findDestinationRecursively(map, 'start', {'start': 1}, ['start'], false);

    return total;
};


console.log(part2Sol(input));