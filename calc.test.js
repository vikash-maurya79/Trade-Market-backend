const { averageCalculator, quantityCalculator } = require('./controllers/buySellController/calculator');


test('Trying to findout total quantity when user buy a stock , in condition when same stock is already avaliable in his holdings..', () => {
    expect(quantityCalculator(25, 75)).toBe(100);
})

test('Trying to find average of new updated stock average in case of user buys a stock taht is already avaliable in his holdings', () => {
    expect(averageCalculator(1, 1, 1)).toBe(1);
})