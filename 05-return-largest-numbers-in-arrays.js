function largestOfFour(arr) {
    //use an empty array for results
    var results = [];

    //Iterate through the results 
    for (var n = 0; n < arr.length; n++) {
        //Largest number in n
        var largestNumber = arr[n][0];
        //for loop finding n lenght
        for (var sb = 1; sb < arr[n].length; sb++) {
            //if statement 
            if (arr[n][sb] > largestNumber) {
                //find largest number
                largestNumber = arr[n][sb];
            }
        }
        //Results n is euqal to largest number 
        results[n] = largestNumber;
    }
    //return the largest number in the array
    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
