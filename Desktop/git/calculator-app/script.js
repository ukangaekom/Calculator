let buttons = document.getElementsByTagName('button');
let scroll = document.querySelector('.theme-scroll');
let background = document.querySelector('.container');
let screen = document.querySelector('.input')
let keyboard = document.querySelector('.calc-keyboard')
let labels = document.querySelectorAll('.label');
const butts = document.querySelectorAll('.button')
let exec = document.querySelector('.equal-to')
let del = document.querySelector('.del')
let reset = document.querySelector('.reset')
let toggle_button = document.querySelector('.theme-scroll')
let toggle_container = document.querySelector('.scroll--container')

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        if(buttons[i].textContent === 'DEL'){
            screen.value = screen.value.slice(0,screen.value.length -1)
        } else if(buttons[i].textContent == 'Reset'){
            screen.value = ''

        } else if(buttons[i].textContent == 'x'){
            screen.value += '*';

        } else if(buttons[i].textContent == '='){
            screen.value = eval(screen.value)

        } else{
            screen.value += buttons[i].textContent
        }
    })
}

scroll_state = -2;
scroll.addEventListener('click',function(e){
    e.preventDafault;
    if ( scroll_state >=2){
        scroll_state = -2;

    } else {
        scroll_state += 2;
        
    }

    scroll.style.transform = `translate(${scroll_state}rem)`
    console.log(scroll_state)

    if(scroll_state == -2){
        background.style.backgroundColor = 'hsl(222, 26%, 31%)'
        for(let i = 0; i<butts.length; i++){
            butts[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
            butts[i].style.color = 'hsl(221, 14%, 31%)';
            butts[i].style.borderBottom = '.3rem solid hsl(28, 16%, 65%)';
    
            }
            for(let i = 0; i < labels.length; i++){
                labels[i].style.color = 'white'
            }
    
            screen.style.backgroundColor = 'hsl(224, 36%, 15%)';
            keyboard.style.backgroundColor = 'hsl(223, 31%, 20%)';
            toggle_button.style.backgroundColor ='hsl(6, 63%, 50%)'
            toggle_container.style.backgroundColor ='hsl(223, 31%, 20%)'
    
            exec.style.backgroundColor =  'hsl(6, 63%, 50%)'
            exec.style.borderBottom = '.3rem solid hsl(6, 70%, 34%)'
            del.style.backgroundColor = 'hsl(225, 21%, 49%)'
            del.style.borderBottom = '.3rem solid hsl(224, 28%, 35%)'
            reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
            reset.style.borderBottom = '.3rem solid hsl(224, 28%, 35%)'
    }

    if(scroll_state == 0){
        background.style.backgroundColor = 'hsl(0, 0%, 90%)'
        for(let i = 0; i<butts.length; i++){
            butts[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
            butts[i].style.color = 'hsl(60, 10%, 19%)';
            butts[i].style.borderBottom = '.3rem solid hsl(35, 11%, 61%)';
    
            }
            for(let i = 0; i < labels.length; i++){
                labels[i].style.color = 'hsl(60, 10%, 19%)'
            }
    
            screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
            keyboard.style.backgroundColor = ' hsl(0, 5%, 81%)';
            toggle_button.style.backgroundColor ='hsl(25, 98%, 40%)'
            toggle_container.style.backgroundColor ='hsl(0, 5%, 81%)'
    
            exec.style.backgroundColor =  'hsl(25, 98%, 40%)'
            exec.style.borderBottom = '.3rem solid hsl(25, 99%, 27%)'
            del.style.backgroundColor = 'hsl(185, 42%, 37%)'
            del.style.borderBottom = '.3rem solid hsl(185, 58%, 25%)'
            reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
            reset.style.borderBottom = '.3rem solid hsl(185, 58%, 25%)'
    }

     
    
    if(scroll_state == 2){
        background.style.backgroundColor = 'hsl(268, 75%, 9%)'
        for(let i = 0; i<butts.length; i++){
        butts[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
        butts[i].style.color = 'hsl(52, 100%, 62%)';
        butts[i].style.borderBottom = '.3rem solid hsl(285, 91%, 52%)';

        }
        for(let i = 0; i < labels.length; i++){
            labels[i].style.color = 'hsl(52, 100%, 62%)'
        }

        screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
        keyboard.style.backgroundColor = 'hsl(268, 71%, 12%)';
        toggle_button.style.backgroundColor ='hsl(176, 100%, 44%)'
        toggle_container.style.backgroundColor ='hsl(268, 71%, 12%)'
    

        exec.style.backgroundColor =  'hsl(176, 100%, 44%)'
        exec.style.borderBottom = '.3rem solid hsl(290, 70%, 36%)'
        del.style.backgroundColor = 'hsl(281, 89%, 26%)'
        del.style.borderBottom = '.3rem solid hsl(290, 70%, 36%)'
        reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
        reset.style.borderBottom = '.3rem solid hsl(290, 70%, 36%)'

    }
})


g = 'tommorrow'

console.log(g.slice(0,g.length -1))
