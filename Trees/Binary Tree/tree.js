class node {
    data = null;
    left_pointer = null;
    right_pointer = null;

    isNull() {
        if(this.data == null && this.left_pointer == null && this.right_pointer == null) return true
        return false
    }
}

module.exports = class Tree {
    start;

    // Function to add an item to the tree
    add(item) {
        try {
            let new_node = new node();
            new_node.data = item;
            let current_node = this.start;

            if(current_node == null) {
                this.start = new_node;
            } else {
                let previous;
                while(current_node != null) {
                    previous = current_node;
                    if(item < current_node.data) {
                        current_node = current_node.left_pointer;
                    } else {
                        current_node = current_node.right_pointer;
                    }
                }

                if(item < previous.data) {
                    previous.left_pointer = new_node;
                } else {
                    previous.right_pointer = new_node;
                }
                return true;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
        return false;
    }

    // Function to remove an item from the tree
    remove(item) {
        let current_node = this.start;
        let previous = null;

        while(current_node != null && current_node.data != item) {
            previous = current_node;
            if(item < current_node.data) {
                current_node = current_node.left_pointer;
            } else {
                current_node = current_node.right_pointer;
            }
        }

        if(current_node != null) {
            if(current_node.left_pointer == null && current_node.right_pointer == null) {
                if(previous.data > current_node.data) {
                    previous.left_pointer = null;
                } else {
                    previous.right_pointer = null;
                }
            } else if(current_node.right_pointer == null) {
                if(previous.data > current_node.data) {
                    previous.left_pointer = current_node.left_pointer;
                } else {
                    previous.right_pointer = current_node.left_pointer;
                }
            } else if(current_node.left_pointer == null) {
                if(previous.data < current_node.data) {
                    previous.left_pointer = current_node.right_pointer;
                } else {
                    previous.right_pointer = current_node.right_pointer;
                }
            } else {
                let right_node = current_node.right_pointer;
                if(right_node.left_pointer != null) {
                    let smallest = current_node.right_pointer;
                    while(smallest.left_pointer != null) {
                        previous = smallest;
                        smallest = smallest.left_pointer;
                    }

                    current_node.data = smallest.data;
                    previous.left_pointer = null;
                } else {
                    current_node.data = right_node.data;
                    current_node.right_pointer = null;
                }
            }
        }
    }

    // Function to traverse the tree
    traverse(current_node) {
        if(current_node != null) {
            if(current_node.left_pointer != null) {
                this.traverse(current_node.left_pointer)
            }
            console.log(current_node.data);
            if(current_node.right_pointer != null) {
                this.traverse(current_node.right_pointer);
            }
        }
    }
}