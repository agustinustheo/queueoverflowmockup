var queueJobsButtons = document.getElementsByClassName('queue-jobs-button');
var queueJobsDetail = document.getElementsByClassName('queue-jobs-detail');
queueJobsDetail[0].style.display = "block";
var details = document.getElementById('details');
for(let i = 0; i < queueJobsButtons.length; i++){
    queueJobsButtons[i].onclick=function(){
        for(let j = 0; j < queueJobsDetail.length; j++){
            queueJobsDetail[j].removeAttribute("style");
        }
        queueJobsDetail[i].style.display = "block";
    }
}