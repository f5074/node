템플릿을 랜더링하는 response를 만드려고 한다. 다음 설명중 맞는 것을 고르시오 *

res.send
res.render
res.rediret
res.locals


아래 파일은 app.js 이다. nunjucks 설정을 보고 차례대로 들어갈 것을 고르시오 *


캡션 없는 이미지
template , true , express
template , false , express
../template , true , express
template , true , app


nunjucks 에서 컨트롤러에서 뿌려진 변수에 html 태그가 포함되어있다 출력하려면 어떻게 하는가 *
5점
{{ message | safe }}
{{ message | filter }}
{{ message & safe }}
{{ message || filter }}


GET / 에 도착했을 때 console.log('첫번째 미들웨어'); 을 동작하게 하는 미들웨어를 작성하려한다. 빈칸에 들어 갈 것과 미들웨어가 들어갈 위치를 고르시오. *
5점
캡션 없는 이미지
next , next , 1
next , next() , 3
next , next , 2
next , next() , 1
옵션 5


body parser 에 대한 설명으로 틀린것을 고르시오. *
5점
express 를 설치하면 자동으로 설치된다.
npm install body-parser로 설치가능하다.
app.use 로 미들웨어 설정을 하고 req.params 로 받을수 있다.
bodyParser.json() 을 미들웨어 설정한다.



bodyparser로 1200원가격 값을 받고 싶다. 맞는 변수는? *
5점
캡션 없는 이미지
req.body.name
req.body.price
req.body.description
req.body.post



app.js 에서 GET /uploads로 접속시 uploads 폴더를 정적폴더로 셋팅하려고 한다. 옳은 것을 고르시오. *
5점
캡션 없는 이미지
this.app.use('/static', express.static('uploads'));
this.app.use('/uploads', express.static('../uploads'));
this.app.use('/uploads', express.static('uploads'));
this.app.use('../uploads', express.static('uploads'));
express 에서 템플릿에서만 사용할 글로벌 변수를 셋팅하려고한다. 맞는 문법을 고르시오. *
5점
res.send
res.render
res.redirect
res.locals



express 에서 페이지없음 not found 응답하려고 한다 옳은것을 고르시오 *
5점
res.send('404')
res.status('404')
res.status('500')
res.status('200')



.dotenv에 대해 틀린것을 고르시오 *
5점
환경변수 설정하기 위함이다.
process.env.변수명으로 접근가능하다.
dotenv.config(); 로 선언한다.
npm install env 로 설치한다.



mysql root 유저 패스워드 접속 명령어로 옳은 것은? *
5점
mysql -u root -p
sql -u root -p
sql -u root -w
mysql -r root -t



데이터 베이스 facameats 생성 명령어로 옳은 것을 고르시오 *
5점
create database facameats;
make database facameats;
generate database facameats;
create database from facameats;



sequelize Products 모델 생성에 대해 빈칸에 순서대로 들어갈것을 고르시오. (id , price 는 숫자형 , name은 문자형 ) *
5점
캡션 없는 이미지
define , INTEGER , STRING
define , INT , STRING
models , INTEGER , STRING
models , INT , STRING




sequelize에서 여러줄을 조회하는 명령어로 옳은 것은? *
5점
모델명.find()
모델명.findAll()
모델명.select()
모델명.selectAll()




sequelize 테이블에 1row를 입력하는 명령어로 옳은것은? *
5점
모델명.append()
모델명.make()
모델명.create()
모델명.insert()



nunjucks 를 템플릿설정하고, write.html을 보여주려고한다. 폴더가 왼쪽과 같을 때 옳은 것은? *
5점
캡션 없는 이미지
res.render( 'admin/write.html');
res.render( 'template/admin/write.html');
res.render( 'admin/write');
res.render( 'template/admin/write');



Promise 객체 생성하는 옳은 것을 고르시오. *
5점
const p1 = Promise( resolve , reject )
const p1 = Promise( (resolve , reject) => { } )
const p1 = new Promise( resolve , reject )
const p1 = new Promise( (resolve , reject) => { } )



p1, p2 가 Promise 객체 일때 Promise all 문법을 완성하세요. *
5점
Promise.all( p1,p2 ).then((result)=>{})
Promise.all({ p1,p2 }).then((result)=>{})
Promise.all([ p1,p2 ]).then((result)=>{})
Promise.all( 'p1', 'p2' ).then((result)=>{})



다음을 바꾼것으로 옳은것은? *
5점
캡션 없는 이미지
( _ , res) => { const products = models.Products.findAll()
async ( _ , res) => { const products = models.Products.findAll()
( _ , res) => { const products = await models.Products.findAll()
async ( _ , res) => { const products = await models.Products.findAll()




sequelize update 에 대해 select의 where 조건으로 알맞은 것은? *
5점
캡션 없는 이미지
where : { id: req.params.id }
[ where : { id: req.params.id } ]
{ where : { id: req.params.id } }
{ where id = req.params.id }