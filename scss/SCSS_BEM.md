BEM(block element modifier)//SCSS 
===
* css를 짜는 구조, 컴퓨터 공학에 대헤 다뤄질 수 도 있다. 
* 컴포넌트란 독립전인 단위모듈, 컴포넌트 한번 찾아보기. -> 기능별로 나뉘어지면서 독립적이다.
* 모듈: 기능별로 나뉘어질 수 있는 프로그램, 파일 등등...적이

####Component Driven design
* 컴포넌트가 주도하는 디자인


###BEM
* block : 레고처럼(숲속마을집 레고) 독립적으로 만들어지는 기능별 단위
* element : (레고집 안의 구성품)블록에 연관된 요소들 
* Modifier : (버전의 차이? 구성품들의 버전을 바꿀때?)element에서 다른 버전을 주고 싶을때.


###SASS(SCSS)외에도 LESS,STYLUS가 있음.
* css는 CSS pre-processor이다. 전처리. CSS 전에 처리를 해준다? 
* 브라우저는 마지막에 css파일만 읽을 수 있으며, SCSS는 브라우저가 CSS파일을 읽기 전에 어떤 일을 수행한다. SCSS에 쓰여진 코드를 자신만의 컴파일러로 해석해서 CSS파일에 넘겨준다.
*  

###SCSS의 기능
1. 변수 사용가능
2. 중첩가능(블록안의 블록이 가능하다.)
3. 연산자도 가능
4. 많은 파일들을 하나의 파일로 불러올 수 있음(import가능)
5. mixin => 코드 재사용 가능
6. 함수도 있음 : 간단한 built-in예제만 할 것.
7. 조건문,반복문도 가능하다.

###SCSS(SASSY CSS)- SASS(Syntatically Awsome Style Sheet) 차이는 문법의 차이.
```sass
.block{}                    /*B*/
.block__element{}           /*E*/
.block__element--modifier{} /*M*/

```
* node.js : 자바스크립트 런타임이다? 
* 런타임 : 해당 언어가 제대로 잘 실행 될 수 있도록 하는 일종의 환경 (쉽게말해서 컨테이너이다.)
* 크롬브라우저도 자바스크립트가 돌아가서 크롬브라우저도 자바스크립트 런타임이라고 하면 될 듯.
* node.js설치
* NPM : Node package Manager - 우리가 개발을 할때 여러가지 필요한 기능들이 많이 있다. 패키지는 미리 필요한 기능들에 대해서 만들어는 파일들의 묶음 - SASS도 패키지의 일부분
* npm install node-sass --save-dev 해당 폴더에서 터미널로 설치하면 node_modules 와 package-lock.json이 설치됨.
* main.scss 파일을 만들고 새 CMD에서 npm init을 치면 1.0.0이 듬
* 여러 정보들을 입력 - name의 경우 폴더 이름과 같도록.
###package.json안에 여러 항목들이 있다.
디펜던시 : 웹서비스를 런칭할때 필요한 기능들은 여기에 두고
* 개발하때는 devDependencied에 넣는다.
* npm install code-sass --save-dev : init하기 전에 해야된다?
* 스크립트 부분 지우고 "compile:sass" : "node-sass main.scss style.css"--"해당스크립트가 실행이 될때의 커맨드를 써야됨"
* 그 다음 터미널에 적었던 npm run compile:sass 를 입력하면 적용됨. -- 여러 오류들은 쿠버네티스 도커 등의 키워드로 검색해보면 될듯
* "compile:sass" : "node-sass main.scss style.css -w" 의 기능을 적용하면 변경된사항들을 계속 css에 전달하게 됨? : 에러가 나는 경우에 터미널 창에서 에러가 난 부분을 알려준다.


###SCSS의 디렉토리 및 파일구조 
* 7-1 pattern : 7개의 폴더를 나누고, 폴더 안에 들어있는 모든 SCSS파일을 1개의 파일(main.scss)에 병합하는 패턴 /오늘은 다섯개만 만들었음. (abstract, base, component, layout, pages)
* base파일에 보통 reset을 많이 한다. 
* (초기화)

```js
*,
*::before,
*::after{
    margin...
}

```

* animation의 경우엔 keyframe관련 애니메이션을 담는다.

```js
@keyframes moveInLeft{
    0%{
      transform: translateX(-100px);
    }
    100%{  
    
}
}
```



###터미널 입력할게 너무 많아요....
* 한번에 실행할 수 있게 하는 스크립트가 있다.
* 
















