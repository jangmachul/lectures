// // 내멋대로 로또
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

// 컨펌 받고 중복 안나오는 로또
// const lotto = [];

// const result = [];

// for (let i = 1; i < 46; i++) {
//     lotto.push(i)
// }

// for (let i = 0; i < 6; i++) {
//     let num = parseInt(Math.random() * lotto.length-1);
//     const re = lotto[num];
//     result.push(re);
//     lotto.splice(num, 1);
// }
// console.log(result);


// class 로 만든 로또 1

// class Circle {
//     num = [];
//     constructor(_num) {
//         this.num = [];
//     }

//     init() {
//         for(let i = 1; i < 46; i++) {
//             this.num.push(i);
//         }
//         return this.num
//     }
// }
// const num = new Circle();


// class GameManager {
//     lotto = [];
//     constructor () {
//         this.lotto = [];
//     }
//     injection() {
//         const Num = num.init()
//         for (let i = 0; i < 6; i++) {     
//             const re = parseInt(Math.random()*Num.length)
//             this.lotto.push(Num[re]);
//             Num.splice(re, 1)
//         }
//         console.log(this.lotto);
//     }
    
// }
// const gamemanager = new GameManager();
// gamemanager.injection()

// class 로 만든 로또 2

// class Ball {
//     num = 0;
//     constructor() {
//         this.num = Math.floor(Math.random() * 45 + 1);
//     }
// }

// class BallManager{
//     ballarr = [];
//     hi = [];
//     constructor () {
//         this.ballarr = [];
//         this.hi = [];
//     }
//     REC(){
//         this.ballarr = []
//         this.hi.push(1);
//         for (let i = 0; i < 6; i++) {
//             const num1 = new Ball();
//             for(let b = 0; b < this.ballarr.length; b++){
//                 if(num1.num === this.ballarr[b].num) return this.REC();
//             }
//             this.ballarr.push(num1);
//         }
//         console.log(this.ballarr);
//         console.log(`${this.hi.length}번 반복됐어`);
//     }
// }

// const ballmanager = new BallManager()
// ballmanager.REC()











// class Ball {
//     num = 0;
//     constructor() {
//         this.num = Math.floor(Math.random() * 45 + 1);
//     }
// }

// class BallManager {
//     ballarr = [];
    
//     mango() {
//         console.log(1)
//         this.ballarr = [];
//         for (let i = 0; i < 6; i++) {
//             const ball = new Ball()
//             for (let b = 0; b < this.ballarr.length; b++) {
//                 if(ball.num === this.ballarr[b].num) {
//                     return this.mango()
//                 }
//             }
//             this.ballarr.push(ball)
//         }
//         console.log(this.ballarr)
//     }
// }

// const ballmanager = new BallManager()
// ballmanager.mango()



class ball {
    num = 0;
    constructor() {
        this.num = parseInt(Math.random() * 45 + 1 )
    }
}

class LottoManager {
    lotto = [];

    apple() {
        this.lotto = [];
    
    }
}

