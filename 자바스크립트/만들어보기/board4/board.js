class Board {
    constructor(_name , _content) {
        this.name = _name;
        this.content = _content;
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
            JSON.parse(localStorage.getItem("todo"))
        }
    }

    write(param) {
        this.init()
        this.arr.push(param)
        localStorage.setItem("todo",JSON.stringify(this.arr))
    }

    render() {
        const Butter = document.querySelector("#butter")
        Butter.innerHTML = "";
        for (let i = 0; i< this.arr.length; i++) {
          const Li = document.createElement("li")
          const Span = document.createElement("span")
          const Span2 = document.createElement("span")
          const Span3 = document.createElement("span")
          const _btn = document.createElement("button")
          const _btn2 = document.createElement("button")
          Span.innerHTML = "" + this.arr[i].name
          Span2.innerHTML = "" + this.arr[i].content
          _btn.innerHTML = "수정";
          _btn2.innerHTML = "삭제";
          Butter.append(Li)
          Li.append(Span,Span2,Span3)
          Span3.append(_btn , _btn2)

          _btn.onclick = () => {
          const data = prompt("수정할 내용을 입력하세요")
          this.arr[i].content = data;
          localStorage.setItem("todo", JSON.stringify(this.arr))
          this.render();
          }

          _btn2.onclick = () => {
            if(confirm("삭제하시겠습니까?")){
              this.arr.splice(i , 1)
              localStorage.setItem("todo", JSON.stringify(this.arr))
              this.render();
            }
          }
        }
    }
}
const boardmanager = new BoardManager()
boardmanager.render();

btn.onclick = () => {
    const name = document.querySelector("#name").value
    const content = document.querySelector("#content").value
    const board = new Board(name , content)
    boardmanager.write(board)
    boardmanager.render()
}



