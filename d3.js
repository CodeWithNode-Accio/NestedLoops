

// 1
// 12
// 123
// 1234
// 12345


// for(let line=1; line<=5; line++){
  
//     let s = ""
//     for(let col = 1; col<=line; col++){
      
//           s = s+ col
//     }
//     console.log(s)
    
// }


// 1
// 22
// 333
// 4444
// 55555


// for(let line=1; line<=5; line++){
  
//     let s = ""
//     for(let col = 1; col<=line; col++){
      
//           s = s+ line
//     }
//     console.log(s)
    
// }


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// let x = 1
// for(let line=1; line<=5; line++){
  
//     let s = ""
//     for(let col = 1; col<=line; col++){
//           s = s+ x
//           x= x+1
//     }
//     console.log(s)
    
// }


// q6:
// 1
// 01
// 101
// 0101
// 10101
// 010101



// for(let line = 1; line<=6; line++){
    
//     let k
//     if(line%2==0){
//         k  = 0
//     }
//     else{
//        k = 1
//     }

//     let str = ""
//     for(let col = 1; col<=line; col++){
//           str = str + k
//           if(k==0){
//               k = 1
//           }
//           else{
//               k = 0
//           }
//     }
//     console.log(str)
// }



// q10
for(let line=1; line<=5; line++){
  
    let numberOfSpace=""
    for(let space = 1; space<=5-line; space++){
        numberOfSpace = numberOfSpace + " "
    }
  
  
  
    let s = ""
    for(let col = 1; col<=line; col++){
      
          s = s+ col
    }
    console.log(numberOfSpace+s)
    
}