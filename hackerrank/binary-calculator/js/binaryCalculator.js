var clear = document.getElementById('btnClr');
let res = document.getElementById('res')
let op = ''
var output = ''
let inputes = ''
let inputString = '';


function clearRes() {
    res.innerHTML = '';
    output = '';
    inputString = '';
}

function getOparation(o) {
    op = o
    console.log('see oparator : ', inputString)
}

function appendInput(i) {
    inputString += i;
    res.innerHTML = inputString;

}

function calculate() {
    console.log(inputString)
    var decOps = inputString.split(/[+-/*]/)
    op=inputString.match(/[*/+-]/).toString()
    let expr=parseInt(decOps[0].replace(/[^01]/gi, ''), 2)+op+parseInt(decOps[1].replace(/[^01]/gi, ''), 2)
    output=eval(expr)
    console.log(expr,output)
    res.innerHTML=(output >>> 0).toString(2)
    inputString = res.innerHTML ;
    output = '';

}