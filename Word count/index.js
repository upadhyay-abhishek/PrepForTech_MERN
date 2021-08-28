let input=document.getElementById('input')

function getWord(){
     let str=input.value.split(' ');
        str=str.filter((n)=>n!="");
        alert(`total word count is ${str.length}`)
}
