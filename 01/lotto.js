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
    //취소 누르면 꺼지게 해야댐..
}

function rand(){
    let randomNum = [];
    while(randomNum.length<7){
        let rand = Math.floor(Math.random()*45)+1;

        if(!randomNum.includes(rand)){
            randomNum.push(rand);
        }
    }
    randomNum.sort((a,b) => a-b);
    return randomNum;
}

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



