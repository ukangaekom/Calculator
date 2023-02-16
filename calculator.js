'use strict';
let buttons = document.getElementsByTagName('button');
let screen = document.getElementById('input');

let result = 0;
let operator = [];
let keys = []
let exec = []

let regex = /[-|+|x|/|%|^]/; 


for(let i =0; i < buttons.length; i++){
        keys.push(buttons[i].textContent);        

    buttons[i].addEventListener('click', function(){
        let but = buttons[i].innerHTML;
        let screendel = screen.value
        if( but == '='){
            screen.value = ''
            
            exec.push(screen.value.split(/[-|+|x|/|%|^|=]/));
            for(i of exec){
                if(i === ''){
                    exec.pop(i);
                }
            }
            console.log(exec);
        } else {
            screen.value += buttons[i].textContent;
        }


        
        // if(regex.test(buttons[i].textContent)){
        //     if(buttons[i].textContent == '+'){
        //         result += 3
        //     }
        //     console.log(result)
        // }

        // if(buttons[i].textContent == 'cls'){
        //     screen.value = '';
        // }

        
    })
    
}

console.log(keys)
 /* regex for numbers */

/* regex for letters */

/* regex for signs */

/* regex for functions */