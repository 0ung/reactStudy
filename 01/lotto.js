//프롬프트로
function num(){
    let randomNum = [];
    while(randomNum.length<6){
        let rand = prompt((randomNum.length+1) + "번째 번호를 입력하세요.(1~45)");
        if(rand != ""){
            if(!randomNum.includes(rand)){
                randomNum.push(rand);
            }else alert("동일한 번호가 존재합니다.");
        }else if(rand==null){
            break;
        }else alert("번호를 입력하세요.");
    }
    randomNum.sort((a,b) => a-b);
    document.write(randomNum);
}

//input 태그로
function printNum() {
    let number = document.getElementById("number").value;
    let inputNum = number.split(" ");
    let intNum = [];
    let prizeNum = [];
    let count = 0;
    for(i=0; i<inputNum.length; i++){
        intNum.push(parseInt(inputNum[i]));
    }
    intNum.sort((a,b) => a-b);
    if(intNum.length != 6){
        alert("번호를 6개 입력하세요.");
    }else{
        document.getElementById("lottoNum").innerText = "입력 번호: " + intNum;

        let randomNum = [];
        while(randomNum.length<6){
            let rand = Math.floor(Math.random()*45)+1;
    
            if(!randomNum.includes(rand)){
                randomNum.push(rand);
            }
        }
        randomNum.sort((a,b) => a-b);
        document.getElementById("result").innerText = "뽑힌 번호: " + randomNum;

        for(i=0; i<inputNum.length; i++){
            for(j=0;j<randomNum.length; j++){
                if(inputNum[i]==randomNum[j]){
                    prizeNum.push(randomNum[j]);
                    count++;
                }
            }
        }
        document.getElementById("prize").innerText = ("당첨 번호: " + prizeNum + ", 당첨 개수: " + count);
    }    
}

//랜덤 숫자 생성
function rand(){
    let randomNum = [];
    while(randomNum.length<6){
        let rand = Math.floor(Math.random()*45)+1;

        if(!randomNum.includes(rand)){
            randomNum.push(rand);
        }
    }
    randomNum.sort((a,b) => a-b);
    document.getElementById("result").innerText = randomNum;

}

//게임 수 입력
function gamePrice(){
    let price = prompt("게임을 진행할 금액을 입력하세요.(한 게임 당 천원)");
    if(price>=1000 && price%1000==0){
        for(i=0; i<price/1000; i++){
            document.write((i+1) + "번째 게임 번호: " + rand() + "<br>")
        }
    }else if(price==null){
        return;
    }else {
        alert("다시 입력하세요");
        gamePrice();
    }
}




