/* global $ */

function getRandomNumber(min, max){
    if (min >=0 && max > min){
        return Math.floor(Math.random() * (max - min) + min);
    }
    return Math.floor(Math.random() * 1000000);
}


// jQuery Cheat Sheet: http://bit.ly/2dq090t
$("h1, h3, p").css("color", "#F8F8F8");

var $h3 = $("h3");
$h3.click(function(){
    $("#description").fadeToggle("slow");
});

$("#button1").click(function(){
    var randomNumber = getRandomNumber();
    $("#output").show().text(randomNumber); 
});

$("#button2").click(function(){
    // see: https://mzl.la/1uDCHOb
    var randomNumber = getRandomNumber(1, 21); // whole number between 0 and 19
    $("#output").show().text(randomNumber); 
});
