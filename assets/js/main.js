$(document).ready(function () {
  var currentDir = $("a").css("direction");

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }


  if ($("#fullpage").length) {
    $('#fullpage').fullpage({
      anchors:['homesec', 'aboutsec', 'inquiresec', 'thegallerysec', 'photogallerysec', 'locationsec', 'footersec'],
      autoScrolling: true,
      scrollHorizontally: true,
      easing: 'easeInOutCubic',
      onLeave: function (origin, destination, direction) {
        if (destination === 4) {
          $(".top_heade").css("background-color", "transparent");
          $(".top_heade").addClass("fixedNav");
        }else{
          $(".top_heade").css("background-color", "#fff");
          $(".top_heade").removeClass("fixedNav");
        }
      }

    });

    $.fn.fullpage.setAllowScrolling(true);
  }



  if ($(".inputfornumber").length) {
    $(".inputfornumber").on('click', function () {
      $(this).toggleClass("activeRoom").parent().parent().find(".roomdropDown").slideToggle();
    })

    $(".roomdropDown ul li").each((index, item) => {
      // console.log(item)
      $(item).on("click", function () {
        var roomnum = $(this).find("span").text();
        // console.log(roomnum);
        $(this).addClass("active").siblings().removeClass("active");
        $(this).closest(".parentnumber").find(".number_input").val(roomnum);
        $(this).closest(".parentnumber").find(".inputfornumber .numtext").text(roomnum);

      })
    })
  }


  var sideanimation = gsap.timeline();
    sideanimation.to(".sidenav", {
    top: 0,
    // height: "0",
    ease: 'Expo.easeInOut'
  });
  sideanimation.from(".links li", {opacity: 0, y: "20px", stagger: .3, ease: 'Expo.easeInOut'})
  sideanimation.reversed(true)
  
  $(".top_heade .nav_icon").on('click', function () {
    sideanimation.play();
  }) 
  $(".sidenav .close").on('click', function () {
    sideanimation.reverse();
  }) 


  if($(".sidenav").length){
    $(".sidenav .links li").on('click', function(){
      sideanimation.reverse("fast");
    })
  }

});
