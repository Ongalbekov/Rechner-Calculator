let numbers=document.querySelector('#numbers');

multiply=()=>{
    numbers.innerText+='*'
}
divide=()=>{
    numbers.innerText+='/'
}
substract=()=>{
    numbers.innerText+='-'
}
add=()=>{
    numbers.innerText+='+'
}
seven=()=>{
    numbers.innerText+='7'
}
eight=()=>{
    numbers.innerText+='8'
}
nine=()=>{
    numbers.innerText+='9'
}
empty=()=>{
    if(numbers.innerText!=0){
        numbers.innerText=''
    }
  
}
four=()=>{
    numbers.innerText+='4'
}
five=()=>{
    numbers.innerText+='5'
}
six=()=>{
    numbers.innerText+='6'
}
one=()=>{
    numbers.innerText+='1'
}
two=()=>{
    numbers.innerText+='2'
}
three=()=>{
    numbers.innerText+='3'
}
enter=()=>{
    numbers.innerText=eval(numbers.innerText)
}
zero=()=>{
    numbers.innerText+='0'
}
pint=()=>{
    numbers.innerText+=','
}

