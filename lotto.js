let userResult;
let finalResult;
function selectLottoNum() {
  let arr = [];
  while (arr.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  arr.sort((a, b) => a - b);
  return arr;
}
function makeManual(cnt) {
  let arr = (e) => {
    let input = document.createElement("input");
    input.setAttribute("class", "num" + e);
    input.setAttribute("type", "number");
    input.setAttribute("min", "1");
    input.setAttribute("max", "45");
    document.getElementById("manual").appendChild(input);
  };
  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < 6; j++) {
      arr(i);
    }
    document.getElementById("manual").appendChild(document.createElement("br"));
  }
}

function getData(cnt) {
  let result = [];
  for (let j = 0; j < cnt; j++) {
    let str = "num" + j;
    let arr = [];
    let a = document.getElementsByClassName(str);
    for (let i = 0; i < a.length; i++) {
      let data = a[i].value;
      arr.push(data);
    }
    result.push(arr);
  }
  return result;
}

function checkData(arr, userData) {
  let result = [];
  userData.forEach((element) => {
    let cnt = 0;
    arr.forEach((e) => {
      if (element.includes(e)) {
        cnt++;
      }
    });
    result.push(cnt);
  });
  return result;
}

function gameStart() {
  document.getElementById("manual").innerHTML = ""; 
  document.getElementById("push").innerHTML = "";
  document.getElementById("result").innerHTML = "";


  let cnt = prompt("횟수 입력");
  let man = getManualInput(cnt);
  makeManual(man);

  let answer = selectLottoNum();
  let button = createSubmitButton(cnt, answer, man);
  document.getElementById("push").appendChild(button);

  return answer;
}

function getManualInput(cnt) {
  const str = `수동으로 진행할 횟수 입력 ${cnt}를 넘으면 안됩니다.`;
  let data = prompt(str);
  if (parseInt(data) > parseInt(cnt)) {
    alert("횟수를 넘겼습니다.");
    return getManualInput(cnt);
  }
  return data;
}


function createSubmitButton(cnt, answer, man) {
  let button = document.createElement("button");
  let first = 0;
  let second = 0;
  let thrid = 0;
  let fouth = 0;
  button.setAttribute("type", "submit");
  button.textContent = "제출";
  button.addEventListener("click", () => {
    let a = getData(man);
    for (let i = 0; i < cnt - man; i++) {
      a.push(selectLottoNum());
    }
    userResult = checkData(answer, a);
    userResult.forEach((e) => {
      switch (e) {
        case 6:
          first++;
          break;
        case 5:
          second++;
          break;
        case 4:
          thrid++;
          break;
        case 3:
          fouth++;
          break;
        default:
          break;
      }
    })
    finalResult = [];
    finalResult.push(first);
    finalResult.push(second);
    finalResult.push(thrid);
    finalResult.push(fouth);

    resultData()
  }, false);
  return button;
}


function resultData() {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';

  let labels = ["1등", "2등", "3등", "4등"];

  for (let i = 0; i < finalResult.length; i++) {
    let label = document.createElement("label");
    label.textContent = labels[i];

    let input = document.createElement("input");
    input.setAttribute("value", finalResult[i]);
    input.setAttribute("readonly", true);
    input.style.border = "none";
    input.style.background = "transparent";
    input.style.fontFamily = "Arial, sans-serif";
    input.style.fontSize = "16px";
    input.style.margin = "5px";

    let container = document.createElement("div");
    container.appendChild(label);
    container.appendChild(input);

    resultDiv.appendChild(container);
  }
}



