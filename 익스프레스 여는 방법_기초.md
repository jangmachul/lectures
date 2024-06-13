```js
const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('server.on')
})

app.get('/',(req, res)=>{
    res.send('hello world')
})
```


require 는 외부 모듈을 가져올수 있는 메서드 입니다. 이걸로 외부 모듈은 express를 가져옵니다.

const 앞에 있는 express는 변수 이름으로 마음대로 지정 가능합니다.

const 로 다시 app 변수를 지정해준뒤 함수를 실행 시켜 주기 위해 express라는 함수를 선언해줍니다.



.listen() 메서드는 서버를 대기 시키기 위해 필요한 메서드 입니다.

그렇기에 app.listen 함수를 만들어 줌으로써 서버가 대기상태에 들어갑니다.

.listen() 함수안에는 포트 번호와 콜백함수가 들어갑니다.

포트번호는 개발을 연습하는 사람들이 주로 3000부터 8000까지 사용하기 때문에 3000을 사용하였습니다.



console.log('server on')은 서버가 대기 상태가 됐을 경우 화면에 출력하게 만들어 주는 static 메서드 입니다.



.get()은 app을 사용한 요청 라우팅 입니다. GET 방식을 요청하기 위해 .get() 함수를 이용합니다.

.get() 함수에는 경로와  requast 와 response가 들어갑니다. 요청이 들어오면 응답이 필요하기 때문입니다.

.send() 는  .write() 와 .end()의 효과를 합친 함수 입니다.



.write()는 문자를 적는 함수 입니다.

.end()는 문자를 마무리 하는 함수 입니다.



.send()  문자가 적히며 마무리까지 짓습니다. 그래서 http 화면에 hello world 가 적히게 됩니다.