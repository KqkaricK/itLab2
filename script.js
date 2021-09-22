var bigsize = "300";
var smallsize = "150";
function changeSizeImage(im) {
  if (im.height == bigsize) im.height = smallsize;
  else im.height = bigsize;
}
function zeroFirstFormat(tmp) {
  if (tmp < 10) {
    tmp = "0" + tmp;
  }
  return tmp;
}
function curFullDate() {
  var current_datetime = new Date();
  var day = zeroFirstFormat(current_datetime.getDate());
  var month = zeroFirstFormat(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();
  var hours = zeroFirstFormat(current_datetime.getHours());
  var minutes = zeroFirstFormat(current_datetime.getMinutes());
  var seconds = zeroFirstFormat(current_datetime.getSeconds());
  return (
    day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
  );
}
setInterval(function () {
  document.getElementById("date").innerHTML = curFullDate();
}, 1000);
function highlightBG() {  
  document.getElementById('element').className='AttachOnMouseOverText';   
}
function highlightOutBG(){
  document.getElementById('element').className='AttachOnMouseOutText';
}

