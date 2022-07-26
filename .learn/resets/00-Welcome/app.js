
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    return (valueInDollar / 1.29) * 127.9;

}

let valueInYen = valueInEuro * 127.9


const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen};
