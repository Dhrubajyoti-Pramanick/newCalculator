function disp(num){
    document.querySelector("#disp").value+= num;
    event.preventDefault();
}
let x=0,y=0,res=0,operator="";
function calc(op) {
    x=parseFloat(document.querySelector("#disp").value);
    document.querySelector("#disp").value ="";
    document.querySelector("#exp").value ="";
    document.querySelector("#exp").value +=x+op;
    console.log(x);
    operator=op;
    console.log(operator);
    event.preventDefault();
}

function inv() {
    x=parseFloat(document.querySelector("#disp").value);
    x*=-1;
    document.querySelector("#disp").value =x;
}

function clr() {
    document.querySelector("#disp").value="";
    document.querySelector("#exp").value="0";
}
function result() {
    y=parseFloat(document.querySelector("#disp").value);
    document.querySelector("#exp").value +=y;
    switch(operator) {
        case '+':
            res=x+y;
            break;
        case '-':
            res=x-y;
            break;
        case '*':
            res=x*y;
            break;
        case '/':
            res=x/y;
            break;
        case '%':
            res=x%y;
            break;
        case '^':
            res=Math.pow(x,y);
            break;
            
    }
    document.querySelector("#disp").value =res;
    document.querySelector("#exp").value =res;
    console.log(y);
    event.preventDefault();
}

function calcSp(op1){
    x=parseFloat(document.querySelector("#disp").value);
    switch(op1) {
        case 'log':
            res=Math.log10(x);
            break;
        case '2':
            res=Math.pow(x,2);
            break;
        case '3':
            res=Math.pow(x,3);
            break;
        case 'sqrt':
            res=Math.sqrt(x);
            break;
    }
    document.querySelector("#disp").value =res;
    document.querySelector("#exp").value =res;
}