function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
        } else {
        result.push(right[rightIndex]);
        rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    // Example usage
    const unsortedArray = [12, 7, 3, 93, 5, 2, 6,84];
    const sortedArray = mergeSort(unsortedArray);
    console.log(sortedArray); // Output: [2, 3, 5, 6, 7, 9, 12]



    // Generate a random list of 1000 integers between 1 and 10000
    const randomList = [];
    for (let i = 0; i < 1000; i++) {
    randomList.push(Math.floor(Math.random() * 10000) + 1);
    }

    console.log("Unsorted list:", randomList);

    const startTime = performance.now(); // Start measuring time
    const sortedList = mergeSort(randomList);
    const endTime = performance.now(); // Stop measuring time

    console.log("Sorted list:", sortedList);

    const elapsedTime = endTime - startTime;
    console.log(`Time taken: ${elapsedTime} milliseconds`);

    /*
    let input = prompt("Enter a list of items separated by commas:");
    let array = input.split(",");

    const marray = mergeSort(array);
    console.log(marray);



    document.addEventListener("DOMContentLoaded", function () {
    const inputData = document.getElementById("inputData");
    const storeButton = document.getElementById("storeButton");
    let storedData = ""; // Initialize an empty variable to store the data
    
    
    storeButton.addEventListener("click", function () {
        storedData = inputData.value; // Get the value from the input field
        const sortedNumber = mergeSort(storedData);
        console.log(sortedNumber); // Display the stored data in the console
    });
    });
    */
    

