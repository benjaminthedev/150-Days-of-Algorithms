function getIndexToIns(arr, num) {
    //Soring the array 
    arr.sort((a, b) => {
        return a - b
    });
    //looping through the arr
    for (var a = 0; a < arr.length; a++) {
        //if a is equal to or greater than num
        if (arr[a] >= num) {
            //then return a
            return a;
        };
    }


    return arr.length;
}

getIndexToIns([40, 60], 50);
