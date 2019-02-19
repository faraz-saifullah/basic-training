// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function add_in_empty_Object(arr,value,empty_object) {
  
  return empty_object;
}

function unflatten(flatObject) {
  
  //creating an empty object
  let final = {};

  //for each property of flat object run the loop
  for (let property in flatObject) {
    
    //call the assignment function
    //split each property at . and consider it as a path to value
    assign(final, property.split('.'), flatObject[property]);
  }

  return final;
}

function assign (final, path, value) {
  
  //running another loop till the previous/last key
  let lastKeyIndex = path.length -1;
  for (var i = 0; i < lastKeyIndex; ++i) {
    let key = path[i];
    //check if key/property present in final
    if (!(key in final)) {
      final[key] = /^\d+$/.test(path[i + 1]) ? [] : {};
    }
    //update the value of final
    final = final[key];
  }
  
  final[path[lastKeyIndex]] = value;
}