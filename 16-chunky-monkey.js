function chunkArrayInGroups(arr, size) {
    // Create a new array
    var newArr = [];

    //Use loop to generate the numbers to slice - see i += size
    for (var i = 0; i < arr.length; i += size) {
        //Push into the new array
        newArr.push(arr.slice(i, i + size));
    }
    //Check arr with console log
    console.log(newArr);
    //If it looks good then we return it
    return newArr;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);
