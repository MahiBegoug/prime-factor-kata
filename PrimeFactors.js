const PrimeFactors = (number) => {
    let result = []
    let divisor= 2
    while(number > 1) {
        while (number%divisor == 0) {
            result.push(divisor)
            number/=divisor
        }
        divisor++
    }
    return result;
}

module.exports = {PrimeFactors}