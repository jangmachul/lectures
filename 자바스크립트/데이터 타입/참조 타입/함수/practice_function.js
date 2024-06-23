// 문제1 "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
function greet () {
    console.log('안녕 내 이름은 제시카야')
}
greet()


// 문제2 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하고 
// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오 예)
// “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
function greet (Name) {

    return Name;
}
const Name = greet('에밀리')
console.log("안녕 내이름은",Name,"야");

// 문제3 