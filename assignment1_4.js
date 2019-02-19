// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
    let final = {};
    for (let property in flatObject) {
        assign(final, property.split('.'), flatObject[property]);
    }
    return final;
}
function assign(final, path, value) {
    let lastKeyIndex = path.length - 1;
    for (var i = 0; i < lastKeyIndex; ++i) {
        let key = path[i];
        if (!(key in final)) {
            final[key] = /^\d+$/.test(path[i + 1]) ? [] : {};
        }
        final = final[key];
    }
    final[path[lastKeyIndex]] = value;
}