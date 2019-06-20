var addNum = document.getElementById("addNum");
var decNum = document.getElementById("decNum");
var numberManipulate = document.getElementById("numberManipulate");
var currNumber = numberManipulate.innerText;

addNum.onclick = function(){
    currNumber++;
    numberManipulate.innerText = currNumber;
}
decNum.onclick = function(){
    currNumber--;
    numberManipulate.innerText = currNumber;
}