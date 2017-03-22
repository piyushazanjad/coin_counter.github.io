
function calc() {
     
var num1 = parseInt(document.getElementById("num1").innerHTML);
var num2 = parseInt(document.getElementById("num2").innerHTML);
var num3 = parseInt(document.getElementById("num3").innerHTML);
var num4 = parseInt(document.getElementById("num4").innerHTML);

var total_sum = document.getElementById("sum").value;

var denom1 ;
var denom2 ;
var denom3 ;
var denom4 ;

var flag= 0;

//for accepting coins in descending order
if(num1 < num2 || num2 < num3){
  window.alert("Please enter the denominations in descending order");
  document.getElementById("num1").innerHTML="";
  document.getElementById("num2").innerHTML="";
  document.getElementById("num3").innerHTML="";
  denom1="";
  denom2="";
  denom3="";
  denom4="";
  document.getElementById("sum").value="";
  flag=1;  
}


// For calculating smallest coins
if (flag==0){
denom1 = parseInt(total_sum/num1);
var rem1 = total_sum%num1;
denom2 = parseInt(rem1/num2);
var rem2 = rem1%num2;
denom3 = parseInt(rem2/num3);
var rem3 = rem2%num3;
denom4 = rem3;
}


document.getElementById("denom1").innerHTML = denom1;
document.getElementById("denom2").innerHTML = denom2;
document.getElementById("denom3").innerHTML = denom3;
document.getElementById("denom4").innerHTML = denom4;


//to dispappear all badges at start
var elems = document.getElementsByClassName("badge1"); 

for(var i = 0; i<elems.length; i+=1){


    elems[i].style.display = 'block';

}
 
//badges are not dislplayed if the denomination value is 0

if( denom1 == 0) {

[].forEach.call(document.querySelectorAll('#d1'), function (el) {
  el.style.visibility = 'hidden';
});
}

if( denom2 == 0) {

[].forEach.call(document.querySelectorAll('#d2'), function (el) {
  el.style.visibility = 'hidden';
});
}

if( denom3 == 0) {

[].forEach.call(document.querySelectorAll('#d3'), function (el) {
  el.style.visibility = 'hidden';
});
}

if( denom4 == 0) {

[].forEach.call(document.querySelectorAll('#d4'), function (el) {
  el.style.visibility = 'hidden';
});
}

if(total_sum == ""){
  window.alert("Please enter values in the circles:");
}




}
    
