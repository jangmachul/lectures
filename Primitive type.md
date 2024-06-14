<<<<<<< HEAD
## 원시 타입
총 7가지가 존재하며, 이들의 공통점은 `object`가 아니며 `메서드(method)`를 가지지 않습니다.

## 원시 타입의 종류
- number
- bigint
- boolean
- undefined
- null
- symbol
- string

## string 타입의 의문점

원시 타입인 string 객체는 메서드를 가질 수 있는데, 이는 `레퍼(wrapper)`객체 이기 때문입니다.

변수나 객체가 문자열을 값으로 가지고 있다면 프로퍼티나 메서드를 사용 할 수 있습니다.

`레퍼(wrapper)`객체가 원시타입의 메소드로 사용되는 이유는 일시적으로 `wrapper`객체가 변환되어 프로토타입 객체를 공유하기 때문입니다.
=======
## 원시 타입이란
원시 타입은 총 7개가 존재하며 공통점은 object가 아니며 메서드를 가지지 않습니다.

## 원시 타입의 종류
- number 
- bigint
- string
- boolean
- null
- undefined
- symbol


### number type
number 타입은 자바스크립트에서 숫자를 의미하는 모든값을 포함하는 타입 입니다.
넘버 타입을 사용 할 때 값들이 number 인지 확인하는 방법은 typeof 를 console.log 안에 넣어주시면 됩니다.
```js
const age = 27;
const money = 10000;

console.log(age) // 27
console.log(money) // 10000
console.log(typeof age) // number
console.log(typeof money) // number

```
### string type
string 타입은 문자열을 의미 하는 타입 입니다.
```js
const study = "공부"
const meat = "고기"

console.log(study) // 공부
```

### boolean type
boolean 타입은 참과 거짓을 저장하는 타입 입니다.
```js
let a = 5;

let b = 10;

if (b > a){
    console.log('b는 a보다 크다')
} else {
    console.log('a는 보다 작다')
} // b는 a보다 크다 가 출력 됩니다.
```

### null type , undefined type
null 타입과 undefined 타입은 각각 null 과 undefined만 할당 가능한 타입 입니다.
```js
const popcorn = null
console.log(popcorn) // null

let tomato // 어떤 값도 할당되지않음, 자료형을 알수 없어서 undefined
consloe.log(tomato) // umdefined
```

### symbol type
symbol 타입은 symbol 함수를 호춤함으로써 생성 가능하며 변경이 불가능한 윈시 값 입니다.
symbol 타입은 생성될 때마다 매번 새로운 심볼이 생성 되므로 new 연산자를 사용했을 시 false 값이 나옵니다.
```js
const buzz = Symbol(2);
const buzz2 = Symbol(3);

console.log(buzz === buzz) // true
console.log(buzz === buzz2) // false
```
### bigint type
자바 스크립트에서 다룰 수 있는 임계치를 넘은 숫자를 다룰 때 사용하는 타입 입니다.

```js
const bignum = 998798998797998879877897987788665465465n;

const huge = BigInt(998798998797998879877897987788665465465); // 998798998797998879877897987788665465465n

const wtb = BigInt("998798998797998879877897987788665465465"); // 998798998797998879877897987788665465465n

const dul = BigInt("0x1ffffffffffff"); // 998798998797998879877897987788665465465n
```

## 원시 타입의 작동 원리

자바 스크립트 에서 원시타입을 `선언(declare)`하게 되면 `스택(stack)`에 저장됩니다.
스택은 `LIFO(Last in first Out)`구조를 가진 `자료구조(data structure)`입니다.
이때 저장된 원시 타입은 `식별자`를 통해 접근 가능하며 원시 데이터와 함께 스택에 저장되는 형식 입니다.

## string 의 의문점

string 타입은 원시 타입이 분명하지만 메서드를 가질 수 있습니다. 그럴수 있는 이유는 자바스크립트가 아래와 같은 코드를
```js
"tmp".concat();
```
`string` 오브젝트로 생성하기에 메서드를 가질 수 있기 때문입니다.
```js
const str = new String('tmp');
```
>>>>>>> 8cef93771929cead3f96f39b85ef1272c2675d3f
