let fs = require('fs');
let arr = [];
arr[0] = 'file1.txt';
arr[1] = 'file2.txt';
arr[2] = 'file3.txt';
arr[3] = 'file4.txt';
(function read(i) {
    fs.readFile(arr[i], function(err, data) {
        if (err) {
            console.log("Error reading file!\n");
        } else {
            console.log(data.toString());
            console.log(data.toString());
            console.log("===========");
            if (i < 3)
                read(i + 1);
        }
    })
})(0);