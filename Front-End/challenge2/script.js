/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
var stringOperation='';
const keys = document.querySelector('.wrapper');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        if(e.target.className=='operation-btn' && e.target.id=='equals'){
            document.getElementById('display').innerHTML=eval(stringOperation);
            stringOperation='';
        }else if(e.target.className=='operation-btn' && e.target.id=='multiplication'){
            stringOperation+='*';
            document.getElementById('display').innerHTML=stringOperation;
        }else{
            stringOperation+=e.target.textContent;
            document.getElementById('display').innerHTML=stringOperation;
        }
    }
})