function rand(){

    let numbers =[];
    for(let i=0; i<6; i++){
        let n = Math.floor(Math.random()*45) + 1;
        if(numbers.indexOf(n) === -1){
            numbers.push(n);
        }else{
            i--
        }
    }
    return numbers;
}
console.log(rand());

// for(let i=0; i<6; i++){
    
//     console.log(Math.floor(Math.random() *45) + 1);
// }