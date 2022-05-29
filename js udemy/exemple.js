'use strict';
const answers = [];

/* answers[0] = prompt('What is your name?', '');
answers[1] = prompt('How is your surname?', '');
answers[2] = prompt('How old are you?', ''); */

console.log(typeof(answers));

console.log(true && 5);

console.log(NaN || 2 || undefined);
//2

console.log(NaN && 2 && undefined);
//

console.log(1 && 2 && 3);
//3

console.log(!1 && 2 || !3);
//  false

console.log(25 || null && !3);
//  25

console.log(NaN || NaN || !3 || undefined || 5);
//5
console.log(NaN || null && !3 && undefined || 5);
//5
console.log(5 === 5 && 3 > 1 || 5 );
//5


const hamburger = 3;
const fries = 3; 
const cola = 0; 
const nuggets = 2;

if(hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if(hamburger && cola || fries ===3 && nuggets) {
    console.log('Done!')
}

let i = 5;
while(i <= 10) {
    console.log(i);
    i++;
}

//2
for (let i = 20; i >= 10; i-- ) {
   if ( i ===13) {
       break;
   }   
    console.log(i);
}

//3

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}




//4
let i = 2;
while(i <= 16) {
    if (i % 2 ===0){
        i++;
        continue;
    }else{
        console.log(i);
    }
    i++;
}

//5 
const array = [];
for (let i = 5; i <= 10; i++) {
    array[i - 5] = i;
}
console.log(array);


//2 -1

const result = [],
      arr = [3, 5, 8, 16, 20, 23, 50];
for(let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);


// 2-2

const myArr = [5, 10, 'Shopping - ', 20, 'Homework - '];

for(let i =0; i < myArr.length; i++) {

    if(typeof(myArr[i]) === 'number') {
        myArr[i] = myArr[i] * 2;
    } else if(typeof(myArr[i]) === 'string') {
        myArr[i] = `${myArr[i]} done`;
    }
    
}
console.log(myArr);

//2-3



const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result);

/*
*
**
***
****
*****
******
*/

let result = '';
for(i = 1; i < 7; i++) {
    for(j = 1; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);



metka: for(let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k++){
            if(k === 3) continue metka;
            console.log(`Third level: ${k}`);
        }
    }
}



const lines = 5;
let result = '';

for(let i = 0; i <= lines; i++) {
    for(let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for(let j = 0; j < 2 * i + 1; j++){
        result +='*';
    }

    result += `\n`;
}

console.log(result);


function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');
console.log(sayHello);


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('jsnglkjn');
console.log(num);


function test() {
    let num = 100;
    return num;
}

const anotherNum = test();
console.log(anotherNum);


const usdCurr = 28;
const discount = 0.9;
function convert(amount, curr) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));

function test() {
    for(let i = 0; i < 7; i++) {
        console.log(i);
        if(i === 6) return;
    }
    console.log('Proverka');
}
test();

function doNothing() {};
console.log(doNothing());


//HW 27.1

function sayHello(name) {
    console.log(`Привет, ${name}!`);
}

sayHello('Антон');

// 27.2
function returnNeighboringNumber(number) {
    console.log([number - 1, number, number + 1]);
}

returnNeighboringNumber(5);

//27.3


function getMathResult(a, b) {
    if (typeof(b) != 'number' || b <= 0) {
        return a;
    }

    let str = '';

    for(let i = 1; i <= b; i++) {
    if(i === b) {
        str = str + `${a * i}`; //последнее число без тире
    } else{  
        str = str + `${a * i}`+ '---';
    // str = str + a * i;
    }
  }
  return str;
}

//console.log(getMathResult(5,3));
//console.log(getMathResult(3,10));
//console.log(getMathResult(10,5));
//console.log(getMathResult(10,'5'));
//console.log(getMathResult(10,0));
console.log(getMathResult(20,-5));

