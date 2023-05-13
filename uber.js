function login(){
    var login=document.getElementsByClassName("login");
login[0].style.backgroundColor="grey";
}
var content=document.getElementById("content");
var content_1=document.getElementById("content-1");
var content_2=document.getElementById("content-2");
var content_3=document.getElementById("content-3");
function underline1(){
    
    var ride=document.getElementsByClassName("link");
    ride[0].style.borderBottom="4px solid black";
    ride[0].style.transition="1.5s";
    content_2.style.display="none";
    content_3.style.display="none";
    content_1.style.display="block";
    ride[1].style.borderBottom="0";
    ride[2].style.borderBottom="0";
}
function underline2(){
    
    var ride=document.getElementsByClassName("link");
    ride[1].style.borderBottom="4px solid black";
    ride[1].style.transition="1.5s";
    content_1.style.display="none";
    content_3.style.display="none";
    content_2.style.display="block";
    ride[0].style.borderBottom="0";
    ride[2].style.borderBottom="0";
}
function underline3(){
    
    var ride=document.getElementsByClassName("link");
    ride[2].style.borderBottom="4px solid black";
    ride[2].style.transition="1.5s";
    content_1.style.display="none";
    content_2.style.display="none";
    content_3.style.display="block";
    ride[1].style.borderBottom="0";
    ride[0].style.borderBottom="0";
}







