# 목차
- `console.log( )` 란?

- `console.log( )` 로 화면 출력하기


## `console.log( )` 란?

`console.log( )` 는 자바스크립트 데이터를 콘솔에 출력하는 메서드 입니다. 

`console.log( )` 는 표현식의 평가된 값을 반환하는 메서드 이기 때문에 표현식이 아닌 문을 실행 했을 때는 undefined 를 반환하게 됩니다.


```js
const obj = {
    sayHi: function() {
        console.log("hi!");
    }
};
console.log(obj.sayHi) // function() { console.log("hi!"); }
console.log(obj.sayHi()) // 콘솔에 hi와 undefined 둘다 출력됩니다.
obj.sayHi() // 콘솔에 Hi! 가 출력 됩니다.
```
