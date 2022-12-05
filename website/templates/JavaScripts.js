
//Range Slider
function modifyOffset() {
  var el, newPoint, newPlace, offset, siblings, k;
  width    = this.offsetWidth;
  newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
  offset   = -1;
  if (newPoint < 0) { newPlace = 0;  }
  else if (newPoint > 1) { newPlace = width; }
  else { newPlace = width * newPoint + offset; offset -= newPoint;}
  siblings = this.parentNode.childNodes;
  for (var i = 0; i < siblings.length; i++) {
    sibling = siblings[i];
    if (sibling.id == this.id) { k = true; }
    if ((k == true) && (sibling.nodeName == "OUTPUT")) {
      outputTag = sibling;
    }
  }
  outputTag.style.left       = newPlace + "px";
  outputTag.style.marginLeft = offset + "%";
  outputTag.innerHTML        = this.value;
}

function modifyInputs() {

  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].getAttribute("type") == "range") {
      inputs[i].onchange = modifyOffset;

      // the following taken from http://stackoverflow.com/questions/2856513/trigger-onchange-event-manually
      if ("fireEvent" in inputs[i]) {
          inputs[i].fireEvent("onchange");
      } else {
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent("change", false, true);
          inputs[i].dispatchEvent(evt);
      }
    }
  }
}
modifyInputs();

//Text Slider

var number = 1

var text1 = "Please note, that the longer the password is, the harder it is to crack!"
var text2 = "Passwords are easily hacked because most humans follow similar patterns!"
var text3 = "59% of people use the same password everywhere!"
var text4 = "90% of passwords can be cracked in less than six hours!"
var text5 = "18% of employees share their passwords with others!"

function changeText()
{
    if (number > 5) number = 1;
    if (number == 1)
    {document.getElementById("quote").innerHTML = text1};
    if (number == 2)
    {document.getElementById("quote").innerHTML = text2};
    if (number == 3)
    {document.getElementById("quote").innerHTML = text3};
    if (number == 4)
    {document.getElementById("quote").innerHTML = text4};
    if (number == 5)
    {document.getElementById("quote").innerHTML = text5};

    number++;
    setTimeout("changeText()", 4000)
}






