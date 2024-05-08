const toggle_btn=document.querySelector('.toggle_btn')
const toggle_btn_icon=document.querySelector('.toggle_btn svg')
const dropdownMenu=document.querySelector('.dropdown-menu')
toggle_btn.onclick=function (){
    dropdownMenu.classList.toggle('open')
}
const buttons=document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click",()=>{
    const offset=button.dataset.carouselButton==="next" ?1:-1
    const slides=button.closest("[data-carousel]").querySelector("[data-slides]")
    const activeSlides=slides.querySelector("[data-active]")
    let newIndex=[...slides.children].indexOf(activeSlides)+offset
    if(newIndex<0)newIndex=slides.children.length-1
    if(newIndex>=slides.children.length) newIndex=0
    slides.children[newIndex].dataset.active=true
    delete activeSlides.dataset.active
    var page=document.getElementById("pages");
    console.log(page)
    page.innerHTML=newIndex+1;
})
})