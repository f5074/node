// // 다음 배열을 보고 a[2] 에 해당하는 값을 고르시오 *
// var a = [1,2,3,5,10]

// console.log(a[2]);


// // 다음중 arr 을 출력하기 위해 [빈칸]에 들어갈 것은? *
// const arr = "hello";
// console.log(arr);
// console.log({arr});
// console.log($arr);
// console.log(${arr});
// console.log('안녕' + arr);

// // 아래를 축약하려 한다. 맞는 것을 고르시오. *

// // const sum = function(x,y){
// //     return x+y;
// // }

// // const sum = (x,y) => x+y
// // function sum(x,y) => x+y
// const sum = function(x,y){ x+y }
// // function sum(x,y) = { x+y }
// console.log(sum);

// // 다음 abc함수를 아래와 같이 실행한다. 무엇이 출력되는가. *
// function abc(a, ...b){
//     console.log(b[0])
// }
// abc('nodejs', 'hello', 1);


// // 다음을 보고 틀린 것을 고르세요 *
// const b= [3,4];
// const [d,e,f] = [1, [2, ...b], '123'];

// console.log(e[1] == 3);
// console.log(f[1] == '2');
// console.log(d.length == 3);
// console.log(e.length == 3);
// console.log(f.length == 3);


// // 다음을 보고 틀린 것을 모두 고르세요. *
// var a = "hello";
// var b = 123;
// var c = 4;

// console.log(a[0] == 'h');
// console.log(b[0] == 1);
// console.log(a+ b == 'hello123');
// console.log(b + c == 1234);


// // 다음중 자바스크립트에 대한 설명 중 맞는 것을 고르시오 *
// // 1)정적언어이다. X => 동적언어
// // 2)컴파일 언어이다. X => 런타임 언어
// // 3)symbol은 객체형 X => 원시타입
// // 4)undefined는 기본 자료형 O

// // 다음과 같이 변수를 선언했다. a의 기본자료형으로 맞는 것을 고르시오. *
// var a = false
// console.log(typeof(a));

// // 다음과 같이 변수를 선언했다. 기본자료형으로 맞는 것을 고르시오 *
// var a;
// console.log(typeof(a));

// // 다음을 실행하면 어떤 값이 나오는가 *
// var str = ['hello', 2, 'hi', 'nodejs'];
// console.log(str.indexOf(2));


// // arr와 같은 배열이 있다. [출력]과 같이 나오도록 한다. 빈칸1,2,3에 들어 갈것을 순서대로 고르시오. *
// var arr = ['hello', 'school', 1,2,3];
// for(var i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// // 함수로 인스턴스를 생성하려 한다. 안에 빈칸에 들어 갈것을 순서대로 고르시오 *
// function Car(a,b){
//     this.name = a;
//     this.color = b;
// }

// var hyundai = new Car('현대', '검정');
// console.log(hyundai.name);
// console.log(hyundai.color);

// var tesla = new Car('테슬라', '노란');
// console.log(tesla.name);
// console.log(tesla.color);


// // 위의 예제에서 hyundai 와 tesla에 move 라는 메서드를 추가하려고 한다. 틀린 것을 모두 고르시오. *
// Car.prototype.move = function(){
//     console.log(this.name + '이동합니다');
// }
// console.log(hyundai.move());


// var a = { } 를 보고 틀린것을 고르시오. *
// 1)리터럴 객체라고 한다.
// 2)new Object() 와 같다.
// 3)a.move = function(){ } 으로 할당 할 수 있다.
// 4)var a= { '20' } 으로 선언 가능하다.

// var a= {};
// a.move = function(){};


// Node.js 에 대해 틀린 설명은? *

// 1)컴파일언어이다 x => 인터프리터기반언어
// 2)서버측 자바스크립트 언어이다.
// 3)npm 은 패키지 매니저이다.
// 4)V8 엔진 기반이다


// index.js 에서 myvar.js가 같은 경로에 있고 a 변수를 불러오려고 한다. *


// // 웹브라우저에 http://localhost:3000 접속시 200응답으로 hello nodejs 를 화면에 띄우려고 한다. 아래 예제가 나열된 순서로 옳은 것을 고르시오. *
// var http = require('http');
// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});    
//     response.write('Hello Nodejs');
//     response.end();
// }).listen(3000);


// 다음 중 npm에 관한 설명중 틀린것을 고르시오. *
// 1)npm init 로 package.json 파일을 생성한다.
// 2)node_modules는 package.json 에 기술된 패키지들이 설치된 폴더다. O
// 3)nodemon은 소스 수정을 감지해서 서버를 내렸다 올려준다. O
// 4)npm start, update는 예약어다.
// 5)작성한 npm script 명령어는 npm [명령어] 로 실행가능하다


// // myObject의 멤버 clone 과 coding 을 더하기 위한 메서드를 작성중이다. myObject.sum() 을 하면 70을 화면에 출력해야 한다.아래 코드를 보고 옳은 것을 모두 고르시오. *
// var myObject = { 
//     'clone' : 30,
//     'coding' : 40
// }
// Object.prototype.sum = function(){
//     console.log(this.clone + this.coding);
//     console.log(this['clone'] + this['coding']);
// }
// myObject.sum();

// var arr = [1,2,3];
// Array.prototype.sum = function(){
//     console.log(arr[0]+ arr[1]);
// }
// arr.sum();

// // 초기값 num = 1; 호출시마다 num이 2배씩 증가하는 increase 함수를 완성하시오. (참고 클로저) *
// function increase(){
//     var num = 1;
//     // return function(){ num * 2; console.log(num); }
//     // function(){ num = num * 2; console.log(num); }
//     // return { num = num * 2; console.log(num); }
//     return function(){ num = num * 2; console.log(num); };
// }

// var inc = increase();
// inc();
// inc();



// // location이 아래와 같고x와 y를 곱한 값을 배열로 리턴받고 싶다. 옳은 것을 고르시오 *
// const location = [
//     { x: 33, y: 30 },
//     { x: 13, y: 1 },
//     { x: 44, y: 2 },
// ]

// console.log(location.map( v => v.x + v.y ));
// // console.log(location.filter( v => v.x + v.y ));
// // console.log(location.map( (x,y) => x + y ));
// // console.log(location.filter( (x,y) => x + y ));



// // numbers 를 작은 수부터 정렬되도록 빈칸을 순서대로 나열한 것은? ex) [1,3,2] => [1,2,3] *
// const numbers = [10, 2, 3, 5, 4];
// numbers.sort(( y,x ) => {
//     if(x<y){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(numbers);




// // jQuery에 대한 설명으로 틀린 것은? *

// 1)$(document).ready(콜백함수) 로 문서 로딩후 실행한다.
// 2)$(셀렉터) 셀렉터로 (#, . ) 으로 id, class 를 지정할수 있다.
// 3)$(셀렉터).html(콜백함수) 로 클릭이벤트를 할당 할수 있다.
// 4)script src 로 라이브러리를 가져와야 jQuery 문법을 사용가능하다.



// // 바닐라 js 로 짠 소스를 jQuery로 바꾸는 과정이다. 틀린 줄을 고르시오. *

// <script>
//     var num = 1;
//     $(document).ready(function(){
//         $('#num').text(num);
//         $('#plus').click(function(){
//             num++;
//             $('#num').html(num);
//         });
//     });
// </script>



// // do-while , while반복문에 대한 설명이다. 출력과 같이 0부터 9까지 출력하려 한다. 틀린 줄을 고르시오 *

// <script>
// i = 0;
// while(i<10){
//     document.write(i);
//     document.write('<br/>');
//     i++
// }
// </script>

// <script>
//     i = 0;
//     do{
//         document.write(i);
//         document.write('<br/>');
//         i++
//     }while(i<10);
// </script>
    