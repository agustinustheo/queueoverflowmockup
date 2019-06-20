var queueJobsButtons = document.getElementsByClassName('queue-jobs-button');
var queueJobsDetail = document.getElementsByClassName('queue-jobs-detail');
queueJobsDetail[0].style.display = "block";
queueJobsButtons[0].style.borderTop = "dodgerblue solid 5px";
queueJobsButtons[0].style.background = "white";
queueJobsButtons[0].style.color = "dodgerBlue";
queueJobsButtons[0].style.display = "inline-block";
queueJobsButtons[0].style.width = "auto";
var details = document.getElementById('details');
for(let i = 0; i < queueJobsButtons.length; i++){
    queueJobsButtons[i].onclick=function(){
        for(let j = 0; j < queueJobsDetail.length; j++){
            queueJobsDetail[j].removeAttribute("style");
            queueJobsButtons[j].removeAttribute("style");
        }
        queueJobsDetail[i].style.display = "block";
        queueJobsButtons[i].style.borderTop = "dodgerblue solid 5px";
        queueJobsButtons[i].style.background = "white";
        queueJobsButtons[i].style.color = "dodgerBlue";
    }
}