const input = document.getElementById('input');
const tocelcius = document.getElementById('c');
const tofehrenheit = document.getElementById('f');
const result = document.getElementById('result');
let temp;

function convert(){

    if(tocelcius.checked){
        temp = Number(input.value);
        temp =( temp - 32 ) * 9 / 5;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if(tofehrenheit.checked){
        temp = Number(input.value);
        temp = ( temp * 9 / 5 ) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else{
        result.textContent = 'select a unit!';
    }
}