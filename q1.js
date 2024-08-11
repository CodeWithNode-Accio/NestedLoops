let n = 279683

while(n>0){
    let last = n%10  // 3
    let count = 0
    for(let i = 1; i<=last; i++){
         if(last%i == 0){
                count++
         }  
    }
    if(count == 2){
        console.log(last)
    }
    // console.log(last)
    n = parseInt(n/10)
}