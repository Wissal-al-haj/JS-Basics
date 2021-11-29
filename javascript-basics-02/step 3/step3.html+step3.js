var i=document.querySelector("#name");
var d=document.querySelector("#d");
i.addEventListener("input",chng);
function chng(){
    i = document.getElementById('name')
    d = document.getElementById('d');
    d.innerHTML =  i.value;
}