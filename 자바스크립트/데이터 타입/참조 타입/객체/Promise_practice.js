const clock = () => new Promise ((res , rej) => {
    const second = [];
    for (let i = 0; i < 50; i++) {
        second.push(i)
        console.log(i)
        setTimeout(() => {
            if (i > 25) {
                res("25보다 큰숫자가 배열에 들어가")
            } else {
                res("25보다 작은 숫자가 배열에 들어가")
        }} , 2000)
    }
}) 

clock().then((a) => {
    console.log(a)
}).catch((a) => {
    console(a);
})

console.log(clock())



const clock2 = () => {
    const second = [];
    setTimeout(() => {
        second.push(1);
        setTimeout(() => {
            second.push(2)
            setTimeout(()=> {
                setTimeout(() => {
                    
                })
            })
        }, 2000)
    }, 2000)
    let s = 1;
    for(let i = 0; i < 10000; i += 2000) {
        setTimeout(() => {
            second.push(s);
            s++;
            console.log(second);
        }, i)
    }
}

clock2();
