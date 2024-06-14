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
