var im=document.querySelector("#image1");
im.addEventListener("mouseover",img_2);
im.addEventListener("mouseout",img_1);

function img_2(){
    img = document.getElementById("image1");
    img.src=("images/image1_2.jpg");


}
function img_1(){
    img = document.getElementById("image1");
    img.src=("images/image1.jpg");


}