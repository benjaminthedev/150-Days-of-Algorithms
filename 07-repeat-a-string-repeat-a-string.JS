function repeatStringNumTimes(str, num) {

    //Create a blank string
    let repeatStr = "";

    //Loop through the string while num is bigger 0
    while (num > 0) {
        //use repeatStr equals repeatStr then concat the str string
        repeatStr = repeatStr.concat(str);
        //Don't want an infinate loop so decrement down num--
        num--;
    }

    // while(str.length >= 1){
    //   console.log('same same');
    //   return str.concat(str);
    // }

    // while(str.length > 1){
    //   return str.concat(str)
    // }

    //console.log(str)

    // if(str.length > 1){
    //   console.log('> 1 test');
    // }

    //console.log(str.length);

    // if(num.length > 1){
    //   return str.concat(str);
    //   console.log('bigger than 1');
    // } 

    return repeatStr;

}

repeatStringNumTimes("abc", 3);

console.log(repeatStringNumTimes("abc", 3));
