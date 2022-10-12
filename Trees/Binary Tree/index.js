const Tree = require("./tree");

function main() {
    let items = ["E", "B", "G", "A", "C", "F", "H"];
    let bt = new Tree();
    items.forEach(item => {
        bt.add(item);
    });

    bt.remove("G");
    bt.traverse();
}

main()