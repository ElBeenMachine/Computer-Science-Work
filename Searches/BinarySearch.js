function search(arr, item) {
    // Set bounds and other vars
    let lowerbound = 0;
    let upperbound = arr.length - 1;
    let found = false;
    let midpoint;

    // While the item is not found and the bounds have not been exceeded, search for the item
    while(!found && lowerbound <= upperbound) {
        // Calculate the midpoint
        midpoint = Math.round(lowerbound + (upperbound - lowerbound) / 2);
        
        // If the item is found, set the midpoint to true, otherwise adjust the bounds accordingly.
        if(arr[midpoint] == item) {
            found = true;
        } else if(arr[midpoint] < item) {
            lowerbound = midpoint + 1;
        } else {
            upperbound = midpoint - 1;
        }
    }

    // Report the outcome
    if(found) {
        console.log(`'${item}' found at index ${midpoint}`);
    } else {
        console.log(`'${item}' was not foud in the dataset`);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
search(array, 3)