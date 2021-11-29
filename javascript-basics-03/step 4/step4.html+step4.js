function f(){
    var p=document.getElementById('password');
    var c=document.getElementById('confirmation');
 
    if (p.value==c.value){
        p.style["border"] = "3px solid green";
        c.style["border"] = "3px solid green";
    }
    else{
     p.style["border"] = "3px solid red";
     c.style["border"] = "3px solid red";
    }
 }