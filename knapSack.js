function knapSack(capacity, weights, values, n) {
    let i, w, a, b, kS = [];
    
    for (i = 0; i <= n; i++) {
        kS[i] = [];
    }

    for (i = 0; i <= n; i++) {
        for (w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                kS[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                // a: 当前商品的价值 + 剩余空间的价值
                // b: 上一个单元格的值
                a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
                b = kS[i - 1][w];
                kS[i][w] = a > b ? a : b;
            } else {
                kS[i][w] = kS[i - 1][w];
            }
        }
    }

    return kS[n][capacity];
}