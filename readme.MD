1.每个递归函数都有两部分: 基线条件和递归条件。递归条件值得是函数调用自己, 而基线条件指的是函数不再调用自己, 从而避免形成无限循环。
2.如果使用循环, 程序的性能可能更高; 如果使用递归, 程序可能更容易理解。
3.狄克斯特拉算法包含4个步骤
  (1): 找出最便宜的节点, 即可在最短时间内前往的节点。
  (2): 对于该节点的邻居, 检查是否有前往他们的更短路径, 如果有, 就更新其开销。
  (3): 重复这个过程, 直到对图中的每个节点都这样做了。
  (4): 计算最短路径。