DOM  // [my_DOMoptimization link](https://github.com/ShinYoungHO/TIL/blob/master/DOM/DOM_Optimization.md)
===

###DOM이란?

1. 문서 객체모델(The Document Object Model, DOM)) => HTML, XML문서의 프로그래밍 interface.
2. HTML코드 자체는 DOM이 아니며, 브라우저에 의해 DOM tree로 파싱되야만 DOM이라 간주한다.
3. 개발자 툴에서 DOM을 확인할 수 있으며 window객체 내 document 객체를 통해 HTML(root document)에 접근합니다
4. 브라우저에 의해 작성된 HTML이 자동으로 수정된 후 파싱될 수 있다.
5. 이미 완성된 HTML의 파일이 DOM에서 동적으로 조작할 수 있도록 자바스크립트를 사용한다. 다른 언어도 가능하지만 자바스크립트가 최적화되어있다고 한다.
6. DOM을 본 뒤 개인적인 느낌은 원본파일을 훼손하지 않고, 유저 입장에서 HTML 파일이 동적으로 변화될 수 있도록 해서 자유롭게 사용 가능하도록 할 수있게 하는 공간이라고 생각된다.

###DOM조작하기

* 크게 다음과 같이 나눠진다. [Link](https://www.w3schools.com/js/js_htmldom_document.asp)

#####DOM Document Object

>>**a**. Find, Change, Add, Delete( HTML element )
> 
>>**b**. Add Event Handler
> 
>>**c**. find HTML Object

>>> Find. 엘리먼트를 id/class/tagName 을 지정해서 찾거나가능

>>> Change. HTML엘리먼트의 속성값(?)/스타일을 바꾸고 심지어 다른 엘리먼트로도 바꾼다

>>> Add/Delete. HTML 엘리먼트를 창조/삭제/추가/대체 하고 텍스트를 HTML output stream에 추가도 가능 

>>> Handler.이벤트 핸들러도 추가가능.

>>> Find HTML obj. 외에도 이미지를 모두 선택하거나 URI를 불러오고 서버 도메인이름, 태그이름별로 선택도 

***
***
***


##자주 쓰는 키워드 

|Add|Find|
|------|------|
|document.createElement('tag')         |document.querySelector(All)('.class')/('#id')/('tag')|
|document.>tag<.append                 |document.querySelector('tag .class')|
|document.>tag<.prepend                |document.querySelector.style.color |
|document.>tag<.appendChild            |document.querySelector.style.backgroundColor|
| appendChild(), insertBefore(n)| |

<br>

| Change   |  remove |
|------|------|
|Element.classList.add('tweet')         |Element.removeChild()//반복문으로 조절가능|
|Element.textContent  = 'dev';         |Element.remove()|
|Element.setAttribute('id', 'content')|  |

++
```js
??
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴 
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴
```
***
***
###추가
* array method is not working on nodelist : 유사배열으로 배열 메소드를 쓸 수 없다. 
* convert nodelist into javascript array : ( .prototype. )

###appendChild - append
<br>

|append()|appendChild()|
|------|------|
|자바스크립트 메서드|DOM 메서드|
|문자열, 텍스트 노드, 엘리먼트 노드 삽입 가능|노드 객체만 삽입 가능|
|노드 갯수 여러개 허용 append(..nodes)|노드 갯수 하나만 허용|
|document.getElementByid('jin').append('Hi'); 사용가능 !|하나의 요소에서 다른 요소 요소를 이동할 때 사용|
|리턴값 반환x|반환|


***














