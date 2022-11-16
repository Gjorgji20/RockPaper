var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var btn5=document.getElementById('btn5');
var btn=document.getElementById('btn');

function btn1Click()
{
    btn1.style.background="yellowgreen";
    alert("You are clicked the 1 btn");
    btn1.style.visibility="hidden";

}

function btn2Click()
{
    btn2.style.background="yellowgreen";
    alert("You are clicked the 2 btn");
    btn2.style.visibility="hidden";

}


function btn3Click()
{
    btn3.style.background="yellowgreen";
    alert("You are clicked the 3 btn");
    btn3.style.visibility="hidden";

}

function btn4Click()
{
    btn4.style.background="yellowgreen";
    alert("You are clicked the 4 btn");
    btn4.style.visibility="hidden";

}


function btn5Click()
{
    btn5.style.background="yellowgreen";
    alert("You are clicked the 5 btn");    
    btn5.style.visibility="hidden";

}

function btnReset()
{
    alert("Successfully reset");
    btn1.style.visibility="visible";
    btn2.style.visibility="visible";
    btn3.style.visibility="visible";
    btn4.style.visibility="visible";
    btn5.style.visibility="visible";
    btn1.style.background="white";
    btn2.style.background="white";
    btn3.style.background="white";
    btn4.style.background="white";
    btn5.style.background="white";
}