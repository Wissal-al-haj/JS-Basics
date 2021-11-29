var a=document.querySelector("#image1");
var b=document.querySelector("#image2");
var c=document.querySelector("#image3");
var d=document.querySelector("#image4");
var e=document.querySelector("#image5");

function ci(){
    if(a.addEventListener("mouseover", function(){
        a.src="images/image1_2.jpg";
    }));

    if(b.addEventListener("mouseover", function(){
        b.src="images/image2_2.jpg";
    }));

    if(c.addEventListener("mouseover", function(){
       c.src="images/image3_2.jpg";
    }));

    if(d.addEventListener("mouseover", function(){
        d.src="images/image4_2.jpg";
    }));

    if(e.addEventListener("mouseover", function(){
        e.src="images/image5_2.jpg";
    }));
}