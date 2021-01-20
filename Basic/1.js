//declaration선언 & Assignment할당
let course;
course = "code states";

//expression표현
let num1, num2, result;
num1 = 5;
num2 = 7;
result = num1 * num2;

//function함수
function getRunCatDistance(speed,time){
  let distance = speed * time;
  return distance;
}

//declare function
//input이 두 번 쓰이긴 했지만, 차이가 없다.
//찾아볼 점 :
function multiplyBy2(input){
  input = input * 2;
  return input;
}

function multiplyBy2(input){
  input = input / 2;
  return input;
}

//call function 함수는 선언되어도 순서에 영향을 미치지 않는다.
//바로 실행시키기 위해선 즉시실행함수표현(ITFE) 사용
//ITFE 첫번째 () 로 전역스코프에 불필요한 변수를 추가해서 오염시키는 것을 예방 및 ITFE 내부로 다른 변수가 오는 것을 예방
//두번째 괄호는 함수를 즉시 호출하는 역할
//구조
//(function () {
//    statements
//})();

let word;
word = returnWordWithJoy("I love coding");

function returnWordWithJoy(word) {
  if (typeof word !== 'string') {
    return 'wrong type' ;
  } else {
    return word + '!';
  }
}

//type타입
let thing, num;
thing = "두루마리 휴지";
num = 3;
function goGet(thing, num) {
  return "혜선아, 가서 " + thing + ' ' + num + '개 가져다 줄래?';
}
let result = goGet(thing, num);

//convertToNumber
//NaN , null, Undefined 차이
//NaN
function convertToNumber(anything) {
  return Number(anything);
}
//convertToString
function convertToString(anything) {
  return String(anything);
}
