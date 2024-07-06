// class Todo {
//     constructor(writer , content){
//         this.writer = writer;
//         this.content = content;
//     }
// }


// // const btn = document.querySelector("#btn")
// // const Content = document.querySelector("#namebox").value
// // const Content2 = document.querySelector("#contentbox").value


// class To_do_arr {
//     constructor(){
//         this.arr = [];
//     }
//     to_do_method(a) {
//         this.arr.push(a)
//         console.log(this.arr)
//     }

//     sorano_method() {
//         const body = document.querySelector("body")
//         const li = document.createElement("li")
//         const span = document.createElement("span")
//         const span2 = document.createElement("span")
//         span.innerHTML = `${this.arr[this.arr.length-1].writer}`
//         span2.innerHTML = `${this.arr[this.arr.length-1].content}`
//         body.appendChild(li)
//         li.append(span, span2)
//     }
    
// }
// const to_do_arr = new To_do_arr();


// function a () {
//     const Content = document.querySelector("#namebox").value
//     const Content2 = document.querySelector("#contentbox").value
//     const todo = new Todo(Content, Content2)
//     to_do_arr.to_do_method(todo);
//     to_do_arr.sorano_method();
// }








// ,정답

class Content {
    constructor(_list) {
        this.list = _list;
    }
}

const btt = document.querySelector("#btn")



class ListManager {
    constructor() {
        this.arr = [];
    }
    push_method(para) {
        this.arr.push(para)
        // console.log(this.arr)
    }

    render() {
        const Body = document.querySelector("#body")
        Body.innerHTML = "";
        for (let i = 0; i < this.arr.length; i++) {
                const Li = document.createElement("li")
                Li.innerHTML = "" + this.arr[i].list
                Body.append(Li)
        }
    }
}
const listmanamger = new ListManager();

btt.onclick = () => {
    const li_list = document.querySelector("#namebox").value
    const content = new Content(li_list)
    listmanamger.push_method(content)
    listmanamger.render()
}


// 오답


// class ListManager {
//     constructor() {
//         this.arr = [];
//     }
//     push_method(para) {
//         this.arr.push(para)
//         // console.log(this.arr)
//     }

//     render() {
//         Body.innerHTML = "";
//         for (let i = 0; i < this.arr.length; i++) {
//             const Body = document.querySelector("#body")
//             const Li = document.createElement("li")
//             Li.innerHTML = "" + this.arr[i].list
//             Body.append(Li)
//             }
//         }
//     }
    
    
//     const listmanamger = new ListManager();
//     listmanamger.render()

// btt.onclick = () => {
//     const li_list = document.querySelector("#namebox").value
//     const content = new Content(li_list)
//     listmanamger.push_method(content)
// }