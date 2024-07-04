# 목차
- 자주 쓰는 CRUD 메서드
- 쓰기 전 기본 상식
    - document
    - append
- C
- R
- U
- D

## 자주 쓰는 CRUD 메서드

DOM을 조작하기 위해선 DOM에 대한 메서드들을 알아 두셔야 합니다. 아무것도 모른체 TO DO LIST 든 게시판이든 JS로 구현을 한다해도 화면에 출력할 수 없다면 아무짝이 소용 없기 때문입니다.


## 쓰기 전 기본 상식

기본적으로 메서드이기 때문에 소괄호를 꼭 붙혀주셔야 합니다. 

그리고 이 소괄호에 "" 문자열이 들어가는지 아니면 다른 데이터 타입이 들어갈수 있는지 확인 하셔야 합니다. 대부분의 경우는 문자열 이지만 그렇지 않은 경우도 존재합니다.


### document

Document 는 객체라는 사실을 인지 하셨을 때 설명이 가능한 부분입니다. Document는 웹 페이지 그 자체를 의미 합니다. 

그렇기 떄문에 HTML 요소에 접근 하시려면 Document 객체부터 시작 하셔야 합니다. 그렇기 때문에 저희가 메서드를 호출 할 때도 메서드 앞에 document가 붙어야 하는 이유이기도 합니다.


### append
ex) append , appendChild

여기서 append 란 부모 와 자식의 관계성을 짓는 메서드 입니다.


```js
const Body = document.querySelector("#body")
const Li = document.createElment("li")

Body.append(Li)
```
이렇게 사용하셨을 경우 앞의 Body 는 부모의 속성을 가지게 되며 Li는 자식의 속성을 가지게 됩니다. 이렇게 될 경우 Body 안에 Li가 생성 되게 되는거죠

appendChild의 경우 여러번 사용이 가능하지만 인자 값을 하나만 넣을 수 있습니다.



## C
C는 Create 의 줄임말이며  자주 쓰이는 메서드는 `createElement`등 메서드가 있습니다.
```js
const Li = document.createElement("li")
```
이렇게 Li라는 변수에 document.createElment("li") 라는 메서드를 적용시켜주게 되면 document 라는 객체에 메모리 자리를 만들어주게 되고 이후 추가 메서드를 사용하여 요소를 직접 제어할 수 있습니다.

주로 append() 도 C에 들어간다고 하는 블로그들도 있습니다.

## R
R은 Read 의 줄임말이며 자주 쓰이는 메서드는 `querySelector`,`querySelectorAll`,`getElementById`등 있습니다.

querySelector() 는 소괄호 안에있는 클래스 또는 아이디와 일치하는 첫번째 태그를 document로 반환합니다.

```js
const query = document.querySelector("li")
```
이렇게 문서 아래 query 라는 변수가 li의 메모리 주소 값을 참조 할 수 있게 됩니다.