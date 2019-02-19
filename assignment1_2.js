// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    string = string.replace(/\W/g, '');
    let myArray = string.split('');
    let myObject = {};
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] in myObject) {
            myObject[myArray[i]] = myObject[myArray[i]] + 1;
        } else {
            myObject[myArray[i]] = 1;
        }
    }
    return myObject;
}