// const lotto = [];

// for (let i = 0; i < 6; i++) {
//     let num = parseInt(Math.random()*45+1)
//     for (let j = 0; j < lotto.length; j++) {
//         if (num === lotto[j]) {
//             console.log(1);
//             continue
//         }
//     }
//     lotto.push(num)

// }
// console.log(lotto);

const lotto = [];

const result = [];

for (let i = 1; i < 46; i++) {
    lotto.push(i)
}

for (let i = 0; i < 6; i++) {
    let num = parseInt(Math.random() * lotto.length-1);
    const re = lotto[num];
    result.push(re);
    lotto.splice(num, 1);
}

console.log(result);



