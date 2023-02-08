var li = document.querySelector("body li:first-child");

li.addEventListener("click" , open);

function open(){
    li.classList.toggle("groter");
    console.log("go");
}

