/**
 * 
 * @param {number} src 
 * @param {number[[]]} graph 
 * @return {number[]}
 * 狄克斯特拉算法一边逐一确定起点到各个顶点的最短路径, 一边对图进行搜索
 * 不能将该算法用于包含负权边的图
 */
function dijkstra(src, graph) {
    let dist = [], visited = [],
        len = graph.length, i, u;

    // 设置各个顶点的初始权重
    // 起点为0, 其他顶点为无穷大
    for (i = 0; i < len; i++) {
        dist[i] = Infinity;
        visited[i] = false;
    }
    dist[src] = 0;

    for (i = 0; i < len - 1; i++) {
        u = minDistance(dist, visited);
        // 标记探索过的顶点
        visited[u] = true;

        for (let v = 0; v < len; v++) {
            // 如果找到更短路径的话, 则更新最短路径的值
            if (!visited[v] && graph[u][v] != 0 && dist[u][v] != Infinity
                    && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    return dist;

    /**
     * 
     * @param {number[]} dist 
     * @param {boolean[]} visited
     * @return {number}
     * 从候补顶点从找出权重最小的顶点
     * 假设A->B: 2, A->C: 3, C->B : 2
     * 此时A所能到达的顶点中到达B的权重最小
     * 因为如果要走别的路径, 那么必定会经过顶点C其权重也就必定会高于A到B这条路径
     */
    function minDistance(dist, visited) {
        let min = Infinity, minIndex = -1, v, len = dist.length;
        for (v = 0; v < len; v++) {
            if (!visited[v] && dist[v] < min) {
                min = dist[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
}

let graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];

console.log(dijkstra(0, graph));