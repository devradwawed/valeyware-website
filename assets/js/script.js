$(document).ready(function() {
  // navber
  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if(wScroll >= 100){
      $("nav").addClass("bgWidth");
      $(".navbar-collapse").removeClass("show")
      $(".navbar-toggler").removeClass("close");
    }else{
      $("nav").removeClass("bgWidth")
      $(".navbar-toggler").removeClass("close");
    }
  });
  $(".navbar-toggler").click(function () { 
    $(this).toggleClass("close");
  });
  // calendar
  let calendarDays = Array.from( document.querySelectorAll(".calendar-days .calendar-day-hover "));
  let months = Array.from(document.querySelectorAll(".month-list div "));
  
  // calendarDays.forEach((button) =>{
  //   button.addEventListener("click" , clicEvent);
  //     function clicEvent(e){
  //       let valueContent =  e.target.textContent;
  //       button.style.backgroundColor ="#69D3FA"
  //       button.style.color ="#fff"
  //       alert( "Date " + valueContent);
  //     }

  //   })


    // loder
    function loder () {
      document.querySelector(".loading-page").classList.add("fade-out");
    }
    function fadeOut (){
      setInterval(loder ,900)
    }
    window.onload = fadeOut()

})

