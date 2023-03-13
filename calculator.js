'use strict';
let buttons = document.getElementsByTagName('button');
let screen = document.getElementById('input');

/* scientific  keys */
let cos = document.querySelector('.cos');
let sin = document.querySelector('.sin');
let tan = document.querySelector('.tan');
let cot = document.querySelector('.cot');
let cosec = document.querySelector('.cosec');
let sec = document.querySelector('.sec');
let sqrt = document.querySelector('.sqrt');
let base2 = document.querySelector('.base2');
let log = document.querySelector('.log');
let square = document.querySelector('.square');

/* function keys */
let mean = document.querySelector('.mean')
let std = document.querySelector('.standard_deviation')
let variance = document.querySelector('.variance')

/* Screen Keys */
let cls = document.querySelector('.clear_screen');
let del = document.querySelectorAll('.back_space');
let answer = document.querySelector('.evaluate')

let result = 0;
let operator = [];
let keys = []
let exec = []

let regex = /[-|+|*|/|%|^]/; 
let numbers = /[\d]/

for(let i= 0; i < buttons.length; i++){
    let x = '';
    if(numbers.test(buttons[i].textContent)){
        buttons[i].addEventListener('click', function(){
            screen.value += buttons[i].textContent;
        })
    }
    if(regex.test(buttons[i].textContent)){
        buttons[i].addEventListener('click', function(){
            screen.value += buttons[i].textContent;

        })

    }
    if(buttons[i].textContent == '='){
        
        buttons[i].addEventListener('click',function(){
            x = eval(screen.value);
            screen.value = String(x)
        })
    }
    if(buttons[i].textContent == 'cls'){
        
        buttons[i].addEventListener('click',function(){
            screen.value = '';
        })
    }

}
console.log(numbers.test('2'))
console.log(keys)

console.log('ekom')
console.log(eval('2 + 4 + 3'))
 /* regex for numbers */

/* regex for letters */

/* regex for signs */
