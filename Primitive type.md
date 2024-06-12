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
```js
number("123"); // 123
number("123") === 123; // 참

number("meat"); // NaN
number(undefined) // NaN
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
1 < 2 // true
1 > 2 // false
12 === 12 // true
11 === 12 // false
12 !== 12 // false
```

### null type , undefined type
null 타입과 undefined 타입은 각각 null 과 undefined만 할당 가능한 타입 입니다.
```js
const popcorn = null
console.log(popcorn) // null

const tomato
consloe.log(tomato) // umdefined
```

### symbol type
symbol 타입은 symbol 함수를 호춤함으로써 생성 가능하며 변경이 불가능한 윈시 값 입니다.
```js
const buzz = symbol()
const buss = symbol(1)

console.log(buzz === buzz) // true
console.log(buzz === buss) // false
```
### bigint type
자바 스크립트에서 다룰 수 있는 임계치를 넘은 숫자를 다룰 때 사용하는 타입 입니다.

```js
const bignum = 998798998797998879877897987788665465465n;

const huge = bigint(998798998797998879877897987788665465465); // 998798998797998879877897987788665465465n

const wtb = bigint("998798998797998879877897987788665465465"); // 998798998797998879877897987788665465465n

const dul = bigint("0x1ffffffffffff"); // 998798998797998879877897987788665465465n
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