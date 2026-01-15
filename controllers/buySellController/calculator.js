function averageCalculator(amount, quantity, dbAvg) {
    if (amount === 0) {
        return 0
    }
    return Number(((amount / quantity) + dbAvg) / 2);
}

function quantityCalculator(quantity, dbquantity) {
    return Number(quantity + dbquantity);
}

module.exports = { averageCalculator, quantityCalculator };