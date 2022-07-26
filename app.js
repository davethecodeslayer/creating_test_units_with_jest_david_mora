
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    return (valueInDollar / 1.29) * 127.9;

}
const fromYenToPound = function (valueInYen) {
    return (valueInYen / 127.9) * 0.8
}
//let valueInYen = valueInEuro * 127.9


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};
