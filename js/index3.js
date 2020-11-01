$(document).ready(function () {

    $(".one").on("mouseover", function(){
        $(".img").attr("src", "img/1-2.jpg");
        $(".background").css("border-color", "gray");
        
        $(".one").css("border-color", "black");

        $(".container").css("color", "white");

        $(".prison1, .prison2, .prison3, .prison4, .prison5, .prison6").css("background-color", "gray");
        $(".prison1, .prison2, .prison3, .prison4, .prison5, .prison6").css("animation-play-state", "paused");
    })
    



    $(".one").on("mouseleave", function(){
        $(".img").attr("src", "img/1.jpg");
        $(".background").css("border-color", "white");
        
        $(".one").css("border-color", "white");

        $(".container").css("color", "gray");

        $(".prison1, .prison2, .prison3, .prison4, .prison5, .prison6").css("background-color", "white");
        $(".prison1, .prison2, .prison3, .prison4, .prison5, .prison6").css("animation-play-state", "running");


    })
})

$(document).ready(function() {


var sf = "new Snowflakes" ({
    color: "#ffffff",
    count: 75,
    minOpacity: 0.2,
    maxOpacity: 0.6
  });


})
  