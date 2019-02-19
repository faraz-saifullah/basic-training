// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  
  //declaring two temporary variables for comparison purposes
  var max = -Infinity;
  var next_max = -Infinity;
  
  //running a loop over the entire input
  for( var i = 0 ; i < array.length ; i++ ) {
      
      //converting non-numeric input to number
      array[i] = +array[i];
      
      //if input > max then replace max with input and second max with max
      if(array[i] > max) {
          next_max = max;
          max = array[i];
        }
      
      //if second max < input < max the replace second max with input
      else if( array[i] < max && array[i] > next_max ) {
          next_max = array[i];
        }
    }
  
  //return answer
  return next_max;
  
}