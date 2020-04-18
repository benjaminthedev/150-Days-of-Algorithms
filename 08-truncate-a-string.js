function truncateString(str, num) {

    //return str.padEnd(str.length > num, '...');

    // if(str.length > num){
    //   console.log('longer');
    //     return str.padEnd(str.length > num, '...');
    // }

    //Create a blank string
    // let repeatStr = "";

    // while(str.length > num){
    //   repeatStr = repeatStr.padEnd(str.length > num, '...');
    // }

    // return str.slice(str.length > num.length).padEnd(3, '...');

    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
