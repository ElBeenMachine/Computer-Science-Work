const Tree = require("./tree");

function main() {
    let items = ["E", "B", "G", "A", "C", "F", "H"];
    let bt = new Tree();
    items.forEach(item => {
        bt.add(item);
    });

    console.log("===== Inorder Traversal: =====");
    bt.inorder(bt.start);
    console.log("===== Preorder Traversal: =====");
    bt.preorder(bt.start);
    console.log("===== Postorder Traversal: =====");
    bt.postorder(bt.start);
}

main()