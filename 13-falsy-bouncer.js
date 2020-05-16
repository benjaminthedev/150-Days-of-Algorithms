function bouncer(arr) {
    return arr.filter((ele) => !!ele);
}

bouncer([7, "ate", "", false, 9]);


//OR

function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

//OR

function bouncer(arr) {
    return arr.filter(Boolean);
}