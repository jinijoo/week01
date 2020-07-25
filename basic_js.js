// console에 써서 빠르게 결과물을 볼 수 있다.

sayHello()
undefined
let a=5;
undefined
a
5
let b=4;
undefined
a+b
9
let place='신촌';
undefined
place
"신촌"
place+a
"신촌5"
5%4
1
5%3
2
4/2
2
6/3
2
console.log(a+b)
VM512:1 9
undefined
a==b
false
a=='a'
false
a===a
true
1=='1'
true
1===1
true
1==='1'
false
let sample = [2,4,6,8]
undefined
sample[0]
2
sample.push('hi')
5
sample[5]
undefined
sample[4]
"hi"
let ss = [10,20]
undefined

// 여기의 결과물은 length다
sample.push(ss);
6
sample[6]
undefined
sample[5]
(2) [10, 20]
sample.length
6
sample[5.1]
undefined

// 배열 안에 또다른 배열에 접근하기
sample[5][0]
10

let dict=['사전1', '사전2'];
undefined
sample.push(dict);
7
sample[7][0]
VM1488:1 Uncaught TypeError: Cannot read property '0' of undefined
    at <anonymous>:1:10
(anonymous) @ VM1488:1
sample[6][0]
"사전1"
let my = 'sparta';
undefined
my.string.toUpperCase;
VM1675:1 Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
    at <anonymous>:1:11
(anonymous) @ VM1675:1
my.string.toUpperCase();
VM1745:1 Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
    at <anonymous>:1:11
(anonymous) @ VM1745:1
console.log(my.toUpperCase());
VM1844:1 SPARTA
undefined
let mail = aaa@google.com;
VM1937:1 Uncaught SyntaxError: Invalid or unexpected token
let mail = 'aaa@google.com'
undefined
mail.split('@');
(2) ["aaa", "google.com"]
mail.split('@')[0]
"aaa"
let test = mail.split('@');
undefined
test
(2) ["aaa", "google.com"]
let join = test.join('+');
undefined
jion
VM2253:1 Uncaught ReferenceError: jion is not defined
    at <anonymous>:1:1
(anonymous) @ VM2253:1
join
"aaa+google.com"
funtion sum(num1, num2){ return num1+num2; }
VM2357:1 Uncaught SyntaxError: Unexpected identifier
function sum(num1, num2){ return num1+num2; }
undefined
sum(5,6)
11
function sum2(s1, s2){ }
undefined
function sum2(s1, s2){ s1}
undefined
function sum2(s1,s2){ s1+s2; }
undefined
sum2(5,6)
undefined
리턴!
VM2863:1 Uncaught SyntaxError: Unexpected token '!'


----day2

function sum(num1,num2){
    console.log('num1:',num1,'num2:', num2);
}
undefined
sum(5,6)
VM329:2 num1: 5 num2: 6
undefined
let temp;
undefined
temp=sum(2,4);
VM329:2 num1: 2 num2: 4
undefined
temp()
VM441:1 Uncaught TypeError: temp is not a function
    at <anonymous>:1:1
(anonymous) @ VM441:1
function sum(num1,num2){
    console.log('num1:',num1,'num2:', num2);
return num1+num2;
}
undefined
sum(5,6)
VM475:2 num1: 5 num2: 6
11
let result=[];
undefined
result.push[temp]
undefined
temp=sum(2,3);
VM475:2 num1: 2 num2: 3
5
result.push(temp);
1
result[0]
5
result.push(6)
2
result[1]
6
let myEmail='my@gmail.com'
undefined
let myName=myEmail.split('@');
undefined
myName
(2) ["my", "gmail.com"]
myName[0]
"my"
myName[1]
"gmail.com"
myName[1].split('.')
(2) ["gmail", "com"]
myName[0]
"my"
let mailKind = myName[1].split['.'][0]
VM1283:1 Uncaught TypeError: Cannot read property '0' of undefined
    at <anonymous>:1:36
(anonymous) @ VM1283:1
myName[1].split('.')[0]
"gmail"
let tempDict={};
undefined
tempDict{key:1}
VM1451:1 Uncaught SyntaxError: Unexpected token '{'
tempDict['day']='sat'
"sat"
tempDict['day2']='sun'
"sun"
tempDict.push('d':1);
VM1657:1 Uncaught SyntaxError: missing ) after argument list
function compare90(num){
    if (num>90){
        alert('크다');
    }else{
        alert('작다');
    }
}
undefined
compare90(100)
undefined
compare90(90)
undefined
function compare90(num){
    if (num>90){
        alert('크다');
    }else if{
        alert('작다');
    }else{
        alert('같다');
    }
}
VM2007:4 Uncaught SyntaxError: Unexpected token '{'
function compare90(num){
    if (num>90){
        alert('크다');
    }if else{
        alert('작다');
    }else{
        alert('같다');
    }
}
VM2029:4 Uncaught SyntaxError: Unexpected token 'else'
function isAdult(person){
    if(person['age']>19){
        return true;
    }else{
        return false;
    }
}
undefined
let person1={'name':'dd', 'age':50};
undefined
isAdult(person1)
true
person1['age']
50
person1['name']
"dd"
person1['phone':'55a']
VM2473:1 Uncaught SyntaxError: Unexpected token ':'
person1['phone']=333
333
person1['phone']
333
person1['addr']='서울'
"서울"
person1['addr']
"서울"



function calculateSum(n){
    let sum = 0;
    for(i=0; i<n; i++){
        sum += i;
    }
    return sum;
}
undefined
calculateSum(10)
45
calculateSum(3)
3
let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기'];
```
VM6552:2 Uncaught SyntaxError: Unexpected end of input
let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기'];
undefined
let count=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count+=1;
    }
    return count;
}
VM6789:6 Uncaught SyntaxError: Illegal return statement
let count=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count+=1;
    }
}
   
2
let count=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count+=1;
    }
}
2
count
2
let count=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count+=1;
    }
    return count
}
VM6853:6 Uncaught SyntaxError: Illegal return statement
let count=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count+=1;
    }
}
2
let count=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count+=1;
    }
}
2
let count2=0;
for(i=0; i<fruitsBasket.length; i++){
    if(fruitsBasket[i]=='딸기'){
        count2+=1;
    }
}
2
count
2








