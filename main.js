const { BinarySearchTree } = require('./binary-search-tree');

//TEST BINARY SEARCH TREE - INSERT DATA
/***************************
        5
    1       6
     3          12
              9     15
             7 11     20
***************************/
const BST = new BinarySearchTree();

BST.insert(5);
BST.insert(1);
BST.insert(6);
BST.insert(12);
BST.insert(15);
BST.insert(9);
BST.insert(11);
BST.insert(3);
BST.insert(20);
BST.insert(7);

const root = BST.getRootNode();
let arrayResults = [];
BST.inOrder(root, (node) => arrayResults.push(node.data));
console.log(arrayResults);

arrayResults = [];
BST.preOrder(root, (node) => arrayResults.push(node.data));
console.log(arrayResults);

arrayResults = [];
BST.postOrder(root, (node) => arrayResults.push(node.data));
console.log(arrayResults);

console.log(BST.findNode(root, 12));