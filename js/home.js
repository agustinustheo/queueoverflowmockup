var queueSlider = document.getElementById("queueSlider");
var queueButtons = document.getElementById("queueSliderButtons").getElementsByClassName("queue-slider-button")

var count = 0;
queueButtons[count].style.background="dodgerBlue";
setInterval(function(){
    count++;

    if(count === 5){
        count = 0 ;
    }
    queueSlider.style.transform ="translateX(-"+ parseInt(count) * 20 +"%)";

    if(count === 0){
        queueButtons[count].style.background="dodgerBlue";
        queueButtons[4].style.background="grey";
    }
    else{
        queueButtons[count].style.background="dodgerBlue";
        queueButtons[count-1].style.background="grey";
    }
}, 2000);

for(let i = 0; i < queueButtons.length; i++){
    queueButtons[i].onclick = function(){
        queueSlider.style.transform ="translateX(-"+ parseInt(i) * 20 +"%)";

        queueButtons[count].style.background="grey";
        queueButtons[i].style.background="dodgerBlue";
        count = i;
    }
}