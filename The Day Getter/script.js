
function getdata(){
    var input=document.getElementById('day').value;
    var button=document.getElementById('btn');
    var output=document.getElementById('result');
    
   var data="The day is";
   var day='';
   if(input==''){
    output.style.color='red';
   }else{
    output.style.color='green';
   }
   switch(input){
       case '7': day="Sunday"; break;
       case '1': day="Monday"; break;
       case '2': day="Tuesday"; break;
       case '3': day="Wednesday"; break;
       case '4': day="Thursday"; break;
       case '5': day="Friday"; break;
       case '6': day="Saturday"; break;
       case '': data="Please enter day within range of 1 to 7";break;
       default: data="Please enter day within range of 1 to 7";
                        output.style.color='#ebbd34';
                        break;
   }
   output.value=data+" "+day;
   
}