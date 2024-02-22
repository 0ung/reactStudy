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
  console.log(result);
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

let a = checkData(selectLottoNum(), getData());
