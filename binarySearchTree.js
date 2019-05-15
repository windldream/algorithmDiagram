function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.insert = function(key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    // 将节点插入到树中
    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    // AVL自平衡二叉树
    function insertAVLNode(node, newNode) {
        if (node === null) {
            node = newNode;
        } else if (newNode.key < node.key) {
            node.left = insertAVLNode(node.left, newNode);

            if (node.left) {
                if (heightNode(node.left) - heightNode(node.right) > 1) {
                    if (newNode.key < node.left.key) {
                        node = rotationLL(node);
                    } else {
                        node = rotationLR(node);
                    }
                }
            }
        } else if (newNode.key < node.key) {
            node.right = insertAVLNode(node.right, newNode);

            if (node.right) {
                if (heightNode(node.right) - heightNode(node.left) > 1) {
                    if (newNode.key > node.right.key) {
                        node = rotationRR(node);
                    } else {
                        node = rotationRL(node);
                    }
                }
            }
        }

        return node;
    }

    // 计算树的高度
    function heightNode(node) {
        if (node === null) {
            return -1;
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
        }
    }

    // 1.节点X的右子树保持不变
    // 2.将节点Y的右子节点置为节点X的左子节点Z
    // 3.将节点X的左子节点置为节点Y
    // 下面函数的tmp为节点X node为节点Y tmp.left为节点Z
    function rotationRR(node) {
        var tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    function rotationLL(node) {
        var tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    function rotationLR(node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
    }

    function rotationRL(node) {
        node.right = rotationLL(node.right);
        return rotationRR(node);
    }

    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    };

    // 中序遍历树
    // 按从小到大的顺序访问树的所有节点
    function inOrderTraverseNode(node, callback) {
        // 基线条件
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    // 先序遍历
    // 以优先于后代节点的顺序访问树的所有节点
    function preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left);
            preOrderTraverseNode(node.right);
        }
    }

    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    };

    // 后序遍历
    // 先访问节点的后代节点, 再访问节点本身
    function postOrderTraverseNode(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left);
            postOrderTraverseNode(node.right);
            callback(node.key);
        }
    }

    this.min = function() {
        return minNode(root);
    };

    function minNode(node) {
        if (node) {
            while (node) {
                node = node.left;
            }
    
            return node.key;
        }
        
        return null;
    }

    this.max = function() {
        return maxNode(root);
    };

    function maxNode(node) {
        if (node) {
            while (node) {
                node = node.left;
            }

            return node.key;
        }

        return null;
    }

    this.search = function(key) {
        return searchNode(root, key);
    };

    function searchNode(node, key) {
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            searchNode(node.left, key);
        } else if (key > node.key) {
            searchNode(node.right, key);
        } else {
            return true;
        }
    }

    this.remove = function(key) {
        root = removeNode(root, key);
    };

    function removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
}

