function lcs(wordX, wordY) {
    let m = wordX.length, n = wordY.length,
        l = [], i, j, a, b;

    for (i = 0; i <= m; i++) {
        l[i] = [];
        for (j = 0; j <= n; j++) {
            l[i][j] = 0;
        }
    }
    for (i = 0; i <= m; i++) {
        for (j = 0; j <= n; j++) {
            if (i == 0 || j == 0) {
                l[i][j] = 0;
            } else if (wordX[i - 1] == wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
                console.log(i - 1, j - 1, wordX[i - 1], wordY[j - 1], l[i][j]);
            } else {
                a = l[i - 1][j];
                b = l[i][j - 1];
                l[i][j] = Math.max(a, b);
            }
        }
    }

    return l[m][n];
}

console.log(lcs('acbaed', 'abcadf'));