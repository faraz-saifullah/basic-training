// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  
  //removing every character from the input that is not an English Alphabet
  string = string.replace(/\W/g, '')
  
  //An array of all the individaul characters of the input
  let my_array = string.split('');
  let my_object = {};
  
  
  //running a loop over entire array
  for( let i = 0 ; i < my_array.length ; i++ )
    {
      
      //if key already present in the object then increment its value
      if( my_array[i] in my_object ) {
          my_object[my_array[i]] = my_object[my_array[i]] + 1;
        }
      
      //if key not present in the object then add it with value 1 
      else {
          my_object[my_array[i]] = 1;
        }
    }
  
  //return the answer object
  return my_object;
}
