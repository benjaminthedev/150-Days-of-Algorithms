function findLongestWordLength(str) {
    //Spiltting the string 
    var words = str.split(' ');
    //Using maxLength to set to 0
    var maxLength = 0;

    //Iterating through
    for (var i = 0; i < words.length; i++) {
        //If statement - if words length is greater than maxLength
        if (words[i].length > maxLength) {
            //then maxLenght is equal to words[i] .lenght
            maxLength = words[i].length;
        }
    }
    //Return results
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
