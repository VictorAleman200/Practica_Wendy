document.addEventListener("DOMContentLoaded", function(){
 
const track = document.querySelector(".track");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector (".prev");
const next = document.querySelector(".next");

let index = 0; 
const slideWidth = 100;
 
function autoSlide(){
    const move = index * slideWidth;
    track.style.transform = `translateX(-${move}px)`;
}
 
if (next){
    next.addEventListener("click", () => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        autoSlide();
    })
}
 
if (prev){
    prev.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        autoSlide();
    })
}
 
})