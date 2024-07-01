let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

function handleClick(event) {
    let element = document.querySelector(".side-bar");
    if (element) {
        let elemWidth = element.offsetWidth;
        if(element.classList.contains("active")) {
            element.classList.remove("active");
            element.classList.add("inactive");
        } 
        else {
            if(element.classList.contains("inactive")) {
                element.classList.remove("inactive");
            }
            element.classList.add("active");
        }
        
    } else {
        console.log("Ha ocurrido un error con el menu, por favor refresque la pagina.")
    }
}