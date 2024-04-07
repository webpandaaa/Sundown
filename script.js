const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elemcnt");
var img =  document.querySelector("#fixed");


elemC.addEventListener('mouseenter' , function(){
    img.style.display = "initial";
})

elemC.addEventListener('mouseleave' , function(){
    img.style.display = "none";
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener('mouseenter' , function(){
        var img = e.getAttribute("data-img");
        fixed.style.backgroundImage = `url(${img})`;
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var fill = document.querySelector("#fill");
var navimg = document.querySelector("nav img");
var menu = document.querySelector("nav h3");
var flag = 0;


menu.addEventListener('click' , function(){
    if(flag == 0){
    fill.style.top = 0;
    navimg.style.opacity = 0;
    flag  = 1;
    }else{
    fill.style.top = " -100%";
    navimg.style.opacity = 1;
    flag = 0;
}
});
