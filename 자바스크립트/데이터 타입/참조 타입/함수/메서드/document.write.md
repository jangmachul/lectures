# 목차
- `document.write( )` 란?
- `document.write( )` 사용방법

## `document.write` 란?
`document.write( )`는 화면에 출력하는 `메서드` 입니다.

`document` 는 `html`이 화면 영역을 칭할 때 쓰는 단어이며 `write` 는 말그대로 적는다 라는 뜻입니다.

`document.write( )`는 문자열 끼리 출력 가능하고 있고 숫자끼리도 출력이 가능하며 문자열와 숫자 도 함께 출력이 가능합니다.

또 여기서 숫자 끼리 출력한다면 덧셈 연산을 수행하게 됩니다.

단, 표현식의 평가된 값을 반환하는 메서드 이기 때문에 표현식이 아닌 문을 실행 했을 때는 undefined 를 반환하게 됩니다.

## `document.write( )` 사용방법
`document.write( )` 소괄호 안에 현재 내가 출력하고 싶은 값을 넣으시면 됩니다.

```js
const a = 10
const b = 5

document.write(a + b); // 15
```
```js
const moon = "달"

const sun = "해"

document.write(moon,sun) // 달해
```
```js
const moon = "달"
const a = 10
document.write(moon,a) // 달 10
```