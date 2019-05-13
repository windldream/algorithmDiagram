/**
 * 
 * @param {number[]} coins 
 */
function MiniCoinChange(coins) {
    let cache = {};

    /**
     * 
     *
     * @param {number} amount
     * @returns {number[]}
     */
    this.makeChange = function(amount) {
        let $this = this;
        if (amount <= 0) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }

        let min = [], newMin, newAmount, i;
        for (i = 0; i < coins.length; i++) {
            let coin = coins[i];
            newAmount = amount - coin;
            // 使用递归将问题分解为子问题
            if (newAmount >= 0) {
                newMin = $this.makeChange(newAmount);
            }
            
            if (newAmount >= 0
                    && (newMin.length < min.length - 1 || !min.length)
                    && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount, newMin);
            }
        }
        return (cache[amount] = min);
    };
}

let miniCoinChange = new MiniCoinChange([1, 5, 10, 25]);
console.log(miniCoinChange.makeChange(36));