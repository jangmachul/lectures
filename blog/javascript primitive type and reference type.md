## 서론
데이터 타입(data type) 이란 개발을 할때 매일매일 사용하고 무조건적으로 이해해야 하는 개념이라 생각한다.

javascript 에서는 데이터 타입을두개로 나눈다. 하나는 원시(primitive)타입이고, 다른 하나는 참조(reference)타입 이다. 본고에서는 이 둘의 차이점에 대해 다룰 예정이다.

## 본론

### 자바스크립트의 원시(primitive) 타입.

자바스크립트의 원시타입으로는 number, bigint, string,boolean ,null, undefined 와 symbol 총 7개가 존재한다. 이들의 공통점은 object가 아니며, 따로 메서드(method)를 가지지 않는다.



하지만 여기서,

자바스크립트의 "string 타입" 은 메서드를 가지는데? 그러면 원시타입이 될수 없지 않은가?

라는 생각이 들수있다

이는 자바스크립트의 런타임이 아래와 같은 코드를

```js
"tmp".concat();

// string 오브젝트로 생성하기에 메서드를 가질 수 있다.

const str = new String('tmp');
```


































