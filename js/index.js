$(document).ready(function (){
    $(".pause_button").on("click", function () {



       $(".pause_button").css("animation-play-state", "running");

       $("div").css("animation-play-state", "running");

       $(".b").css("animation-play-state", "paused");

       $(".b2").css("animation-play-state", "running");

       $(".timer1, .timer2").css("animation-play-state", "paused");

       $(".main").css("animation-play-state", "paused");

       
        

    })
})