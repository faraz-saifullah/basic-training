// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function recursiveCall(currentKey, unFlatObject, emptyObject) {
    for (var temp in unFlatObject) {
        if (unFlatObject.hasOwnProperty(temp)) {
            var property = temp;
            var value = unFlatObject[temp];
            if (currentKey.length > 0) {
                property = currentKey + '.' + temp;
            }
            if (typeof value == 'object') {
                recursiveCall(property, value, emptyObject);
            } else if (typeof value != 'object') {
                emptyObject[property] = value;
            }
        }
    }
}
function flatten(unFlatObject) {
    var emptyObject = {};
    recursiveCall('', unFlatObject, emptyObject);
    return emptyObject;
}
