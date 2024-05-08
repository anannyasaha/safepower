document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var gifContainer = document.getElementById('gif-container');
        gifContainer.style.display = 'block';

        setTimeout(function() {
            gifContainer.style.display = 'none';
            var signin_button=document.getElementsByClassName("sign-in-btn");
            signin_button[0].style.display='none'
        }, 1000); // Stop after 1 second
        todarkmode()
    }, 2000); // Start after 2 seconds // 15000 milliseconds = 15 seconds
});
const toggle_btn=document.querySelector('.toggle_btn')
const dropdownMenu=document.querySelector('.dropdown-menu')
toggle_btn.onclick=function (){
    dropdownMenu.classList.toggle('open')
}
function todarkmode(){
    setTimeout(function(){var logo=document.getElementsByClassName("logo_active");
    logo[0].style.display="flex";
    var logo=document.getElementsByClassName("logo_inactive");
    logo[0].style.display="none";
},2000);
    
    var links = document.getElementsByClassName("links");
    setTimeout(function(){
        var signin_button=document.getElementsByClassName("sign-in-btn");
        signin_button[0].style.display='flex';
        signin_button[0].classList.remove("light")}
       ,2000);
            document.body.classList.add("dark");
    setTimeout(function(){
        if (links) {
            links[0].classList.remove("light");
           
        }
    }
    ,3000);

}