var typed =new Typed (".text", {
    strings: [" I'm a Software Developer " , "And a UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})


var sidemenu=document.getElementById("side-menu")

function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-180px"
}



