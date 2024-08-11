// 50-60
// m , n

// factorial kae sum


// 1-5 

// 1 => 1
// 2 => 1*2 = 2 
// 3 => 1*2*3 = 6
// 4 => 1*2*3*4 = 24
// 5 => 1*2*3*4*5 = 120


let m = 2
let n = 6


let sum = 0
for(let i = m; i<=n; i++){
    // console.log(i)
    // i = 2
    let f = 1
    for (let k = 1; k<=i;k++){ // 1 - 5
       f = f*k// 1*1 = 1, 1*2 = 2, 2*3 = 6, 6*4 = 24, 24*5 = 120
    }
    // console.log(f)
    sum = sum+f

}

console.log(sum) // 153