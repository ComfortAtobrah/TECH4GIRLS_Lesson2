
let go=document.getElementById("ln1");
go.style.backgroundColor=("blue");


function changemore(){
    let am=document.getElementById("ln2");
am.style.backgroundColor=("grey");
am.style.color=("black");
am.innerHTML=("I know now what the DOM is 🙌");
}


let more = document.getElementById("ln2"); 
more.addEventListener("click",changemore); 


function changemore1(){
    let is=document.getElementById("ln3");
is.style.backgroundColor=("red");
is.style.color=("black");
is.innerHTML=("I know how to access/ select elements in a DOM🐒");
}

r
let more1=document.getElementById("ln3");
more1.addEventListener("dblclick",changemore1);

 function changemore2(){
let me=document.getElementById("ln4");
me.style.backgroundColor=("orange");
me.style.color=("black");
me.innerHTML=("I know  how to use the style methods to change the styles of an element in the DOM🐾");
 }


let more3=document.getElementById("ln4");
more3.addEventListener("click",changemore2);
function changemore3(){
    let it=document.getElementById("ln5");
it.style.backgroundColor=("green");
it.style.color=("black");
it.innerHTML=("I know how the styling properties differ in JS from CSS☑");


}

let more4=document.getElementById("ln5");
more4.addEventListener("dblclick", changemore3);



function changemore5(){
    let to=document.getElementById("ln6");
    to.style.backgroundColor=("black");
    to.style.color=("white");
    to.innerHTML=("Yes I did it!!! I manipulated the DOM and styled the elements🥰🥰🥰🥰🥰🥰");
}

let more5=document.getElementById("ln6");
more5.addEventListener("dblclick", changemore5);

function openbutton(){
    let pic=document.getElementById("pic");
    pic.style.display="block";

}
let button=document.getElementById("button1");
button.addEventListener("click",openbutton);