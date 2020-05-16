function titleCase(str) {
    return str.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");



//Or:




function titleCase(str) {

    //Split the string to an array of strings
    let newArr = str.split(' ');

    //map over each
    newArr = newArr.map((word) => {

        //firstLetter make to upper case
        const firstLetter = word.charAt(0).toUpperCase();



    });



    return newArr;
}

titleCase("I'm a little tea pot");
