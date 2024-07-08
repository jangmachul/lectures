class Board {
    constructor(_name , _content) {
        this.name = _name
        this.content = _content
    }
}

class BoardManager {
    constructor() {
        this.arr = [];
    }

    init() {
        if(localStorage.getItem("todo") === null) {
            localStorage.setItem("todo", JSON.stringify(this.arr))
        } else {
            this.arr = JSON.parse(localStorage.getItem("todo"))
        }
    }

    write(param) {
        this.init()
        this.arr.push(param)
        localStorage.setItem("todo",JSON.stringify(this.arr))
    }

    render() {
        this.init()
        const Body = document.querySelector("#body")
        Body.innerHTML = "";
        for (let i = 0; i < this.arr.length; i++) {
            const Li = document.createElement("li")
            const Span = document.createElement("span")
            const Span2 = document.createElement("span")
            const span3 = document.createElement("span");
            const btn1 = document.createElement("button")
            const btn2 = document.createElement("button")
            btn1.innerHTML = "수정"
            btn2.innerHTML = "삭제"
            span3.append(btn1, btn2);
            console.log(this.arr)
            Span.innerHTML = "" + this.arr[i].name 
            Span2.innerHTML = "" + this.arr[i].content
            Body.append(Li)
            Li.append(Span, Span2, span3)

            btn1.onclick = () => {
                const data = prompt("입력")
                this.arr[i].content = data;
                localStorage.setItem("todo", JSON.stringify(this.arr))
                this.render();
            }
            
            btn2.onclick = () => {
                this.arr.splice(i, 1);
                localStorage.setItem("todo", JSON.stringify(this.arr))
                this.render();
            }
        }
    }
}

const boardmanager = new BoardManager()
boardmanager.render()

btn.onclick = (e) => {
    const _input = document.querySelector('#name').value
    const _input2 = document.querySelector('#content').value
    const board = new Board(_input , _input2)
    boardmanager.write(board)
    boardmanager.render()
}