class Board {
    constructor(_content) {
        this.content = _content
    }
}

class BoardManager {
    constructor() {
        this.arr = [];
    }

    init() {
        if (localStorage.getItem("todo") === null) {
            localStorage.setItem("todo",JSON.stringify(this.arr))
        } else {
            this.err = JSON.parse(localStorage.setItem("todo"))
        }
    }

    write(_content) {
        this.init()
        this.arr.push(_content)
        localStorage.setItem("todo", JSON.stringify(this.arr))
    }

    render() {
        const Body = document.querySelector("#body")
        Body.innerHTML = "";
        for (let i = 0; i < this.arr.length; i++) {
            const Li = document.createElement("li")
            const Span = document.createElement("span")
            Span.innerHTML = "" + this.arr[i]
            Body.append(Li)
            Li.append(Span)
        }
    }
}

const boardmanager = new BoardManager()

boardmanager.render()

btn.onclick = () => {
    const _btn = document.querySelector("#content").value
    const board = new Board(_btn)
    boardmanager.write(board)
    boardmanager.render()
}