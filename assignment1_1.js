// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    var max = -Infinity;
    var nextMax = -Infinity;
    for (var i = 0; i < array.length; i++) {
        array[i] = +array[i];
        if (array[i] > max) {
            nextMax = max;
            max = array[i];
        } else if (array[i] < max && array[i] > nextMax) {
            nextMax = array[i];
        }
    }
    return nextMax;
}