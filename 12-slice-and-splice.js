function frankenSplice(arr1, arr2, n) {
    //New array spread arr2
    const newArr = [...arr2];
    //see the 2nd arr
    console.log(newArr);
    //Splice the arr2 into newArr
    newArr.splice(n, 0, ...arr1);
    console.log(newArr);
    //return newArr
    return newArr;

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


//OR

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}



//OR

function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}