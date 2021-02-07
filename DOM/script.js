let menus = document.querySelectorAll("button"); //모든 버튼을 가져옵니다.

let btnAmericano = menus[0];
let btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick; // 이상으로 for 문으로 충분히 구현할 수 있는 내용입니다.
//
function handleClick(event) {
//해당 이벤트가 실행될때 클릭된 엘리먼트의 textcontent를 가져온다.
    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
//   let currentMenu = ; // TODO
//   console.log(currentMenu + "를 클릭하셨습니다.");
}