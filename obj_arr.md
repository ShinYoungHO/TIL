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
* //boy에 person 의 son key가 갖고있는 value인 {age:9}를 복사 (객체 안의 객체를 복사할땐 주소를 가져오나? 새로 생성하나?)
* //새로 생성한다고 가정하면, boy의 주소값을 가지는 heap메모리의 객체가 {age:20}으로 바뀌고, son.age는 9 그대로 일 것이다.
* //Koans runner를 돌려도 debugger를 돌려도 person.son.age의 값은 20. 객체안의 객체를 복사해도 주소를 가져오는 듯 하다.