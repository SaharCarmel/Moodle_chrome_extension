var topicList = [];
var i = 0;
var j = 0;
var nextElement = "";
var count = 0;
x = document.getElementById('section-0');
while (count != 14) {
  if (x != null){
    x.getAttribute('aria-label');
    topicList[i] = x.getAttribute('aria-label');
    i++;
    j++;
    nextElement = "section-" +j;
    x = document.getElementById(nextElement);
  }
  else {
    console.log('section-'+i+"is missing");
    j++;
    nextElement = "section-"+j;
    x = document.getElementById(nextElement);
  }
count++;
}
window.alert(topicList);
