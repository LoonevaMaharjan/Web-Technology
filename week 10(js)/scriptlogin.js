//declare variable
/*document.getElementById("myBtn").onclick = function(){
let username = document.getElementById("uname").value; //getelementbyid bhaneko in built function ho,user sanga input lina lai
document.getElementById("name").innerHTML=username;
let age = document.getElementById("unumb").value;
if(age>=18){
    document.getElementById("page").innerHTML=age + " You can vote";
}else{
    document.getElementById("page").innerHTML=age + " You cannot vote"
}

}
function changeParagraph(){
    var p = document.getElementsByTagName("p");
    for(var i =0;i<p.length;i++){
        p[i].style.fontWeight = "bold";
        p[i].style.color = "blue";

    }

}*/

/*function selectClass(){
    var para = document.getElementsByClassName("para");
    var i;
    for(i=0;i<para.length;i++){
        para[i].style.color = "red";
    }
}*/

/*function query(){
    var p= document.querySelector(".para"); // id ko lagi #, class cha bhane ., element cha bhane element nai rakhne
   console.log(p);
}*/
function query(){
    var p = document.querySelectorAll(".para");
    console.log(p);
}