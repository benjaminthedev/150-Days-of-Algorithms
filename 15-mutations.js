function mutation(arr) {
    //Get First letter and lowercase it
    var firstLetter = arr[0].toLowerCase();
    //Get Second letter and lowercase it
    var secondLetter = arr[1].toLowerCase();
    //For loop over the 2nd letter
    for (var i = 0; i < secondLetter.length; i++) {
        //if 1st letter - indexOf i is less than 0
        if (firstLetter.indexOf(secondLetter[i]) < 0) {
            //obv:
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);
