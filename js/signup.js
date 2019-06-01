$(document).ready(function(){
    let count = 1;
    let signUpProgressBar = document.getElementsByClassName('queue-signup-progress-bar');
    signUpProgressBar[count-1].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
    $('.queue-signup-next-button').on('click', function(){
        if(count == 0){
            count = 1;
        }
        signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
        $('#signUpForm').css("transform", "translateX(" + count * 20 * -1 + "%)");
        count++;
    });
    $('.queue-signup-back-button').on('click', function(){
        count--;
        signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "0%";
        $('#signUpForm').css("transform", "translateX(" + (count - 1) * 20 * -1 + "%)");
    });
});
document.getElementById("finishSignUp").onclick = function(){
    window.location.href = "home.html";
}