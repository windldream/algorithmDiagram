function makeChange(origAmt, coins) {
    if (origAmt % 25) {
        coins[0] = Math.floor(origAmt / 25);
        origAmt = origAmt % 25;
    }

    if (origAmt % 10) {
        coins[1] = Math.floor(origAmt / 10);
        origAmt = origAmt % 10;
    }

    if (origAmt % 5) {
        coins[2] = Math.floor(origAmt / 5);
        origAmt = origAmt % 5
    }

    coins[3] = origAmt

    return coins;
}

console.log(makeChange(63, []));