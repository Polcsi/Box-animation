const btn = document.querySelector('.btn');
const closebtn = document.querySelector('.closebtn');
const openbtn = document.querySelector('.openbtn');
const content = document.querySelector('.content');

openbtn.onclick = () => {
    btn.style.animation = "open 3s"
    openbtn.style.display = "none";
    setTimeout(function(){
        btn.style.width = "550px";
        btn.style.height = "300px";
        btn.style.animation = "";
        content.style.display = "grid";
        closebtn.style.display = "unset";
    }, 2900);
    console.log("Open");
}

closebtn.onclick = () => {
    btn.style.animation = "close 3s";
    btn.style.width = "100px";
    btn.style.height = "50px";
    closebtn.style.display = "none";
    content.style.display = "none";
    setTimeout(function(){
        openbtn.style.display = "unset";
        btn.style.animation = "";
    }, 3000);
    console.log("Close");
}