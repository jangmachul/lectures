const arr = [1,2,3,4,5];
const arr2 = [...arr,6,7,8,9];

console.log(arr2); // [1,2,3,4,5,6,6,7,8,9]
// 얕은 복사


const ed = ["a", "b","c","d"];

const op = ed;;

op.push("e");

console.log(ed); // ['a','b','c','b','e']
// 깊은 복사

const obj = {
    a : 10,
    b : {
        a : 30,
        b : 12
    }
}
const obj2 = {...obj} // 이게 얕은 복사가 아니라 깊은 복사여야 가능한 답 ...은 스프레드라서 얕은 복사일텐데 도대체 왜지
obj2.b.a = 100;
console.log(obj2.b.a) // 100
console.log(obj.b.a) // 100?????
// 얕은 복사