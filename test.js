const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('One euro should be 1.206 dollars', () =>{
    let total = fromEuroToDollar(1);

    expect(total).toBe(1.2);
})

test('One dollar should be 99.14 Yen', () =>{
    let total = fromDollarToYen(1);

    expect(total).toBe(99.14728682170542);
})

test('One yen should be 0.006254886630179828 Pounds', () =>{
    let total = fromYenToPound(1);

    expect(total).toBe(0.006254886630179828);
})