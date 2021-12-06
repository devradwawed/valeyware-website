$(document).ready(function() {
  // navber
  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if(wScroll >= 100){
      $("nav").addClass("bgWidth");
      $(".navbar-collapse").removeClass("show")
    }else{
      $("nav").removeClass("bgWidth")
    }
  });
  $(".navbar-toggler").click(function () { 
    $(this).toggleClass("close");
  });
  // calendar
  let calendarDays = Array.from( document.querySelectorAll(".calendar-days .calendar-day-hover "));
  calendarDays.forEach((button) =>{

    button.addEventListener("click" , clicEvent);

      function clicEvent(e){
        let valueContent =  e.target.textContent;
        alert( "Date " + valueContent);
      }
    })

    
function loder () {
  document.querySelector(".loading-page").classList.add("fade-out");
}
function fadeOut (){
  setInterval(loder ,1000)
}
window.onload = fadeOut()

})

