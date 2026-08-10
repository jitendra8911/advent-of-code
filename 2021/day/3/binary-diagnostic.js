import {input} from "./test-data"

const findGamma = () => {
    let gamma = "";

    input.forEach(binVal => {
        gamma = gamma.concat(gamma, binVal[0]);
    })

    return parseInt(bin)

}