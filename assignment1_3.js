// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function recursive_call(currentKey, unflatObject, empty_object) {
    
  
  //run the loop for all the keys in input object or unflat object
    for ( var temp in unflatObject ) {
        //console.log(typeof(into[i]));
       //if(typeof(temp) == 'object')
      
      //check if property itself is an object
        if ( unflatObject.hasOwnProperty(temp) ) {
            
            //if it is then go further deep
            var property = temp;
            var value = unflatObject[temp];
            
            //concat the name of key only if length > 0
            if (  currentKey.length > 0 ) {
                property = currentKey + '.' + temp;
            }
            
            //now if value is an object make a recursive call to reach one level deep
            if ( typeof value == 'object' ) {
                recursive_call(property, value, empty_object);
            } 
          //check if last level is reached and store into the object
          else if ( typeof value != 'object' ) {
                empty_object[property] = value;
            }
        }
    }
}

function flatten(unflatObject) {
  // Write your code here
  
  //creating empty object to store final result
  var empty_object = {};
  
  //calling recursive function to get result into empty object
  recursive_call('', unflatObject, empty_object);
  
  //return the answer
  return empty_object;
}