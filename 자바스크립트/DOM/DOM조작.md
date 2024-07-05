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

DOM을 조작하기 위해선 DOM에 대한 메서드들을 알아 두셔야 합니다. 아무것도 모른 채 TO DO LIST 든 게시판이든 JS로 구현을 한다 해도 화면에 출력할 수 없다면 아무짝에 소용 없기 때문입니다.


## 쓰기 전 기본 상식

기본적으로 메서드이기 때문에 소괄호를 꼭 붙혀주셔야 합니다. 

그리고 이 소괄호에 "" 문자열이 들어가는지 아니면 다른 데이터 타입이 들어갈 수 있는지 확인 하셔야 합니다. 대부분의 경우는 문자열이지만 그렇지 않은 경우도 존재합니다.


### document

Document 는 객체라는 사실을 인지 하셨을 때 설명이 가능한 부분입니다. Document는 웹 페이지 그 자체를 의미 합니다. 

그렇기 떄문에 HTML 요소에 접근 하시려면 Document 객체부터 시작 하셔야 합니다. 그렇기 때문에 저희가 메서드를 호출할 때도 메서드 앞에 document가 붙어야 하는 이유이기도 합니다.


### append
ex) append , appendChild

여기서 append 란 부모 와 자식의 관계성을 짓는 메서드 입니다.


```js
const Body = document.querySelector("#body")
const Li = document.createElment("li")

Body.append(Li)
```
이렇게 사용하셨을 경우 앞의 Body 는 부모의 속성을 가지게 되며 Li는 자식의 속성을 가지게 됩니다. 이렇게 될 경우 Body 안에 Li가 생성 되게 되는거죠

appendChild의 경우 여러 번 사용이 가능하지만 인자 값을 하나만 넣을 수 있습니다.



## C
C는 Create 의 줄임말이며  자주 쓰이는 메서드는 `createElement( )`등 메서드가 있습니다.

### createElement( )
```js
const Li = document.createElement("li")
```
이렇게 Li라는 변수에 document.createElment("li") 라는 메서드를 적용시켜주게 되면 document 라는 객체에 메모리 자리를 만들어주게 되고 이후 추가 메서드를 사용하여 요소를 직접 제어할 수 있습니다.

주로 append() 도 C에 들어간다고 하는 블로그들도 있습니다.

## R
R은 Read 의 줄임말이며 자주 쓰이는 메서드는 `querySelector( )`,`querySelectorAll( )`,`getElementById( )`등 있습니다.

querySelector() 는 소괄호 안에 있는 클래스 또는 아이디와 일치하는 첫번째 태그를 document로 반환합니다.
### querySelector( )
```js
const query = document.querySelector("li")
```
이렇게 문서 아래 query 라는 변수가 li의 메모리 주소 값을 참조할 수 있게 됩니다.

### querySelectorAll( )
```js
const query = document.querySelectorAll("p")
```
이렇게 querySelectorAll로 가져올 경우 [] 배열로 가져오게 됩니다.

### getElementById( )
```js
const query = getElementById("id")
```
이렇게 getElementById 사용한 이유는 해당 태그에 있는 id 속성을 가져오기 위함 입니다. 이렇게 가져올 경우 id를 가져온다고 명시가 되어있기 때문에 따로 #을 붙힐 필요는 없습니다.

## U
U 는 update 의 줄임말이며 자주 쓰이는 메서드로는 `textContent` , `setAttribute( )` , `classList.add( )` 등 이 있습니다.

update 이기 때문에 먼저 create 로 지정해 주셔야 합니다. 기존의 것을 수정 , 업데이트 하시는 개념이라 생각하시면 이해하기 편합니다.

### textContent
```js
const en = document.createElement("li");

en.textContent = "hello_world";
```
textContent 이렇게 작성해 주셨을 경우 기존에 어떤게 적혀있던 제가 가장 마지막에 업데이트한 문자가 출력 됩니다. textContent를 아무리 많이 쓰셔도 가장 마지막의 textContent 가 업데이트 되어 기존의 써놨던 textContent는 출력이 되질 않습니다.

### setAttribute( )
```js
const en = document.createElement("li");

en.setAttribute("id","update")
```
setAttribute( ) 에는 이렇게 소괄호가 들어가게 됩니다. 이렇게 사용 하셨을 경우
소괄호 안에 2개의 요소를 적을 수 있는데 첫번째는 속성 , 두번째는 값이 들어가게 됩니다. 여기서 값은 속성의 값이기 때문에 en의 속성이 `id`가 되며 id의 값이 `update`가 되는거기 때문에  li 태그의 id에 update가 되는 것입니다. 더 쉽게 풀어서 얘기하면 #update 가 되는 것입니다.


### classList.add( )
```js
const en = document.createElement("li");
en.classList.add('up')
```

classList.add( ) 는 클래스를 추가할 수 있습니다. 위에 id 추가를 이해 하셨다면 이것도 공짜로 오는 지식입니다. 소괄호 안에는 클래스 명을 문자열로 넣으시면 됩니다.

## D
D 는 Delete 의 줄임말이며 삭제한다는 뜻을 가지고 있습니다. 자주 쓰는 메서드로는 classList.remove() , removeChild() 등 이 있습니다.

### classList.remove( )
```js
const en = document.createElement("li");

en.classList.add('up')

en.classList.remove('up')
```
classList.remove( ) 굉장히 유사한 친구를 update 목록에서 봤습니다. 맞습니다 반대로 생각해서 클래스를 지워주는 메서드입니다.

### removeChild()
```js
`
<div id="parent">
    <div id="child"></div>
</div>
`
const father = document.getElementById("parent")

const son = document.getElementById("child")

const destruction = father.removeChild(son);

`
<div id="parent">
</div>
`
```
이렇게 removeChild( )를 사용해주셨을 경우 parent 안에있는 id값을 child 가진 태그를 전부 지워줍니다.
