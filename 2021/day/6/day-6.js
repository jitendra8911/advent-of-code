import {state, testState} from "./input";

const n = 256;
const map = {};

const part1Sol = () => {
    const lanternfish = [...state];
    for (let i = 0; i < n; i++) {
        let currTotalLanternFish = lanternfish.length;
        for (let j = 0; j < currTotalLanternFish; j++) {
            if (lanternfish[j]  === 0) {
                lanternfish.push(8);
                lanternfish[j] = 6;
            } else {
                lanternfish[j] -= 1;
            }
        }
    }

    console.log(lanternfish.length);
};


const part2Sol = () => {
    const paddedLanternFish = state.map(fish => fish + 1);
    const groups = paddedLanternFish.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1
        } else {
            acc[curr] = 1;
        }

        return acc;
    }, {});
    const uniqueTimers = Object.keys(groups);
    const timerMap = {};

    const findNumberOfFishesRecursively = (timer, total) => {
       if (timerMap[timer]) return timerMap[timer];
       let currTotal = total + 1;
       if (timer + 9 <= n) {
           currTotal += findNumberOfFishesRecursively(timer + 9, 0);
       }
       if (timer + 7 <= n) {
           currTotal += findNumberOfFishesRecursively(timer + 7, 0);
       }

       timerMap[timer] = currTotal;
       return currTotal;
    };

    for (let i = 0; i < uniqueTimers.length; i++) {
        timerMap[uniqueTimers[i]] = findNumberOfFishesRecursively(parseInt(uniqueTimers[i]), 0);
    }

    let totalFishes = paddedLanternFish.length;

    for (let i = 0; i < uniqueTimers.length; i++) {
        const timer = uniqueTimers[i];
        totalFishes += timerMap[timer] * groups[timer];
    }
    
    return totalFishes;
};


console.log(part2Sol());

