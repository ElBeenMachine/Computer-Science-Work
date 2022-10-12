const Tree = require("./tree");

function main() {
    let items = ["E", "B", "G", "A", "C", "F", "H"];
    let bt = new Tree();
    items.forEach(item => {
        bt.add(item);
    });

    console.log("========================");
    bt.remove("G");
    bt.traverse(bt.start);
    console.log("========================");
    bt.add("K");
    bt.traverse(bt.start);
    console.log("========================");
    bt.remove("E");
    bt.traverse(bt.start);
    console.log("========================");
}

main()