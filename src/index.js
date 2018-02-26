module.exports = function makeExchange(currency) {
    let coins = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    if (currency <= 0) {
        return {};
    } else {
        let amount = {};
        for (key in coins) {
            let unit = Math.floor(currency / coins[key])
            if (unit >= 1) {
                amount[key] = unit;
            }
            currency = currency % coins[key];
        }
        return amount;
    }
}
