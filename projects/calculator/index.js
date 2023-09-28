//  ,   f   j   =>  ⌫   √

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let value = '';
let memory = 0;
for (const item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='C'){
            value='';
            screen.value=value;
        }
        else if (buttonText=='⌫'){
            value=screen.value;
            value=value.slice(0,-1);
            screen.value=value;
        }
        else if (buttonText=='='){
            value=screen.value;
            screen.value=eval(value);
        }
        else if(buttonText=='M+') {
            document.getElementById('memory').style.color = '#227700'
            memory+=eval(screen.value);
        }
        else if(buttonText=='M-') {
            document.getElementById('memory').style.color = '#227700'
            memory-=eval(screen.value);
        }
        else if(buttonText=='MR') {
            screen.value=memory;   
        }
        
        else if(buttonText=='x'){
            value=screen.value;
            buttonText='*';
            value+='*';
            screen.value=value;
        }
        else if(buttonText=='√'){
            value=screen.value;
            value+='Math.sqrt(';
            screen.value=value;
        }
        else{
            value=screen.value;
            value+=buttonText;
            screen.value=value;
        }
    })
}