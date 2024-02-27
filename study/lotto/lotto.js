function btnClick(){
    //랜덤 번호 생성 
     const randomNums = new Set();
 
     while(randomNums.size<6){
         var randomNum = Math.floor(Math.random()*45+1);
         randomNums.add(randomNum);
         console.log(randomNum);
     }
 
     console.log("랜덤 set 길이 :" + randomNums.size);
 
     
 
    //입력 값 가져오기
    const pickInputs = document.getElementsByClassName("inputNum");
    const pickNums = new Array();
    console.log(pickInputs.length);
 
    for(let i=0; i<pickInputs.length; i++  ){
         var pickNum = pickInputs[i].value;
         pickNums.push(pickNum);
         console.log(pickNum);
    }
 
    //반복문으로 비교하기
    //동일한 값 저장 , 동일할 때 i 값 상승 >> 갯수 counting
    const sameNum = new Array();
    let sameCount = 0;
 
    randomNums.forEach(element => {
         for(let j=0; j<pickNums.length; j++){
            console.log(element);
            console.log(pickNums[j] );
                 if(element==pickNums[j]){
                     console.log(element+" "+pickNums[j])
                     ++sameCount;
                     sameNum.push(element)
                    }
             }
    });
         
   alert(sameCount);

 }