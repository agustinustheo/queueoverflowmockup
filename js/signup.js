$(document).ready(function(){
    let count = 1;
    let signUpProgressBar = document.getElementsByClassName('queue-signup-progress-bar');
    signUpProgressBar[count-1].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
    $('queue-error-message').hide();
    $('.queue-signup-next-button').on('click', function(){
        if(count == 0){
            count = 1;
        }
        if(count == 1){
            if($('#nameInput').val() === ""){
                $('#nameErr').text("Name cannot be empty");
                $('#nameErr').css("display", "block");
            }
            else if($('#nameInput').val().length < 3){
                $('#nameErr').text("Name cannot be less than 3 characters");
                $('#nameErr').css("display", "block");
            }
            else{
                $('#nameErr').hide();
                signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
                $('#signUpForm').css("transform", "translateX(" + count * 20 * -1 + "%)");
                count++;
            }
        }
        else if (count == 2){
            var emailRegex = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$');
            if($('#emailInput').val() === ""){
                $('#emailErr').text("Email cannot be empty");
                $('#emailErr').css("display", "block");
            }
            else if(!emailRegex.test($('#emailInput').val())){
                $('#emailErr').text("Wrong email format");
                $('#emailErr').css("display", "block");
            }
            else{
                $('#emailErr').hide();
                signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
                $('#signUpForm').css("transform", "translateX(" + count * 20 * -1 + "%)");
                count++;
            }
        }
        else if (count == 3){
            var phoneRegex = new RegExp('^[0-9]{10,12}$');
            if($('#phoneInput').val() === ""){
                $('#phoneErr').text("Phone number cannot be empty");
                $('#phoneErr').css("display", "block");
            }
            else if(!phoneRegex.test($('#phoneInput').val())){
                $('#phoneErr').text("Wrong number format");
                $('#phoneErr').css("display", "block");
            }
            else{
                $('#phoneErr').hide();
                signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
                $('#signUpForm').css("transform", "translateX(" + count * 20 * -1 + "%)");
                count++;
            }
        }
        else if (count == 4){
            var dobError = false;
            var dobRegex = new RegExp('^[0-2][0-9]|(3)[0-1]\/0[0-9]|1[0-2]\/[0-9]{4}$');
            if($('#dobInput').val() === ""){
                $('#dobErr').text("Date of Birth cannot be empty");
                $('#dobErr').css("display", "block");
                dobError = true;
            }
            else if(!dobRegex.test($('#dobInput').val())){
                $('#dobErr').text("Wrong date format");
                $('#dobErr').css("display", "block");
                dobError = true;
            }
            else{
                $('#dobErr').hide();
                dobError = false;
            }

            var homeError = false;
            if($('#homeInput').val() === ""){
                $('#homeErr').text("Home address cannot be empty");
                $('#homeErr').css("display", "block");
                homeError = true;
            }
            else{
                $('#homeErr').hide();
                homeError = false;
            }

            var genderError = false;
            if ($('input[name="gender"]:checked').length == 0) {
                $('#genderErr').text("Gender cannot be unselected");
                $('#genderErr').css("display", "block");
                genderError = true;
            }
            else{
                $('#genderErr').hide();
                genderError = false;
            }

            if(!dobError && !homeError  && !genderError){
                signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "100%";
                $('#signUpForm').css("transform", "translateX(" + count * 20 * -1 + "%)");
                count++;
            }
        }
    });
    $('.queue-signup-back-button').on('click', function(){
        count--;
        signUpProgressBar[count].getElementsByClassName('queue-signup-progress-bar-full')[0].style.width = "0%";
        $('#signUpForm').css("transform", "translateX(" + (count - 1) * 20 * -1 + "%)");
    });
});

document.getElementById("finishSignUp").onclick = function(){
    if($('#passInput').val() === ""){
        $('#passErr').text("Password cannot be empty");
        $('#passErr').css("display", "block");
    }
    else if($('#passInput').val().length < 8){
        $('#passErr').text("Password cannot be less than 8 characters");
        $('#passErr').css("display", "block");
    }
    else{
        $('#passErr').hide();
        window.location.href = "home.html";
    }
}