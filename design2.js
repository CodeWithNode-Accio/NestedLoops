// *****
// *****
// *****


// for(let line = 1; line<=3; line++){

//     let str = ""
//     for(let col= 1; col<=5; col++){
//         str = str+"* "
//     }
//     console.log(str)

// }


// *   => 1
// **   => 2
// ***  => 3
// ****  => 4


// for(let line = 1; line<=4; line++){

//     let str = ""
//     for(let col= 1; col<=line; col++){
//         str = str+"*"
//     }
//     console.log(str)

// }


// *   => 1
// *** => 3
// ***** => 5
// ******* => 7
// ********* => 9

let x = 1
for(let line = 1; line<=5; line++){

    let str = ""
    for(let col= 1; col<=x; col++){
        str = str+"*"
    }
    console.log(str)

    x = x+2

}