class Todo {
    constructor(_writer , _content) {
        this.writer = _writer;
        this.content = _content;
    }
}

class Todolist {
    constructor() {
        this.arr = [];
    }

    Init() {
        if(localStorage.getItem("todo") === null) {
            localStorage.setItem("todo", JSON.stringify(this.arr))
        } else {
            this.arr = JSON.parse(localStorage.getItem("todo"))
        }
    }

    write(_todo) {
        this.Init();
    this.arr.push(_todo);
    localStorage.setItem("todo",JSON.stringify(this.arr))
    }

    render() {
        this.Init();
        const Body = document.querySelector("#body")
        Body.innerHTML = "";
        for (let i = 0; i < this.arr.length; i++) {
            const LI = document.createElement("li")
            const Span = document.createElement("span")
            const Span2 = document.createElement("span")
            Span.innerHTML= "" + this.arr[i].writer
            Span2.innerHTML= "" + this.arr[i].content
            Body.append(LI)
            LI.append(Span, Span2)
        }
    }
}

const todolist = new Todolist()
todolist.render();

btn.onclick = () => {
    const _btn = document.querySelector("#writer").value
    const _btn2 = document.querySelector("#content").value
    const todo = new Todo(_btn,_btn2)
    todolist.write(todo)
    todolist.render()
}