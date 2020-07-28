function sumAll(a, b) {
    let output = a + b
    let difference = b - a
    let minusOne = b - 1
    if (a = b) {
        output = a + b
    }
    else if (a < b) {
        for (let i = difference; difference > 0; difference -- )
            let subTotal += output + minusOne
            minusOne --
            output += subTotal
        } 
    } else {
        let difference2 = a - b
        let minusOne2 = a - 1
        do {
            output += minusOne2
            difference2--
        } while (difference2 > 0 && minusOne2 > b) 
    }
    return output
}
module.exports = sumAll
