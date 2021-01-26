[in 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in)
===
* (속성 in 객체명)
* 속성 : 속성의 이름이나 배열의 index를 뜻하는 문자열 or 수 값
* 객체명 : 객체의 이름
```js
obj={a:1,b:2,c:3,d:4}
for(let keys in obj)//keys라는 변수를 선언 및 할당한 뒤, obj객체의 속성을 하나씩 불러옴.
                    //of 는 string이나 배열, 유사배열에 사용

```
***
```js
obj={a:1,b:2,c:3,d:4}
let result ='';
for(let keys in obj){
    result+=keys+'\n';
}
console.log(result);
a
b
c
d
```
두객체의 속성명을 비교할 수도 있다.
```js
obj1={a:1,b:2,c:3,d:4}
obj2={c:1,d:2,e:3,f:4}
let result ='';

for(let keys in obj1){
    if( !(keys in obj2) ){
       console.log(!(keys in obj2)) 
//obj1의 속성명을 하나하나 불러와서 obj2객체의 속성명과 다른게 있을 경우 출력
//그 상태의 keys 변수는 obj2의 속성명들과 같은 경우가 없으므로 !(keys in obj2)는 true를 출력
//obj1의 속성명과 obj2의 속성명이 다른 경우가 두개 있으므로(c,d) if 문이 두번 실행 및 true 2번출력

    }
}
```
***
