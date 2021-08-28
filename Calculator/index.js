
var str1='';
function display(str){
    str1+=str
    document.getElementById('input').value=str1;
    if(isNaN(str)){
        var oper=document.getElementsByClassName('operator')
        var len=oper.length;
        for(let i=0;i<len;i++){
            oper[i].disabled=true;
        }
    }
}

function clean(){
    str1='';
    document.getElementById('input').value=str1;
    enableOperator();
}
function getResult(){
     str1=eval(str1);
    document.getElementById('input').value=str1;
    enableOperator();
    
}
function enableOperator(){
    var oper=document.getElementsByClassName('operator')
        var len=oper.length;
        for(let i=0;i<len;i++){
            oper[i].disabled=false;
        }
}
