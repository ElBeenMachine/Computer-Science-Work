// Function to sort the array
function sort(arr) {
    // Calculate the last item in the array
    const last = arr.length - 1;

    // Iterate through all the items in the array
    for(i = 1; i <= last; i++) {
        // Get the current data
        currentData = arr[i];

        // Set the position
        pos = i;

        // Until the item is in the correct part of the array, move the pointer forward
        while(pos > 0 && arr[i - 1] > currentData) {
            arr[pos] = arr[pos - 1];
            pos--;
        }

        // Set the data in the array
        arr[pos] = currentData;
    }

    // Output the result
    console.log("Sorted array:", arr);
}

// Set the array and sort it
const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Logging
console.log("Unsorted array:", array)
sort(array);