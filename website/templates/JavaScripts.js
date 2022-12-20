
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
    {{document.getElementById("quote").innerHTML = text5};};

    number++;
    setTimeout("changeText()", 4000)
}

//Copy button

function CopyFunction() {
  // Get the text field
  var copyText = document.getElementById("text");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 100); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

//Generate Password

function GeneratePassword() {

    // Get the value from range slider
    var length = document.getElementById("slider").value;

    // Export length to python engine

    // Changing passinfo
    var weekinfo = "WARNING!!! Password length is easy to crack.\nIt will take hackers less than 6 hours to crack it"
    var mediuminfo = "Your password is NOT easy to crack.\nHackers need more time to crack you, but it is still possible!\nThey will need about 2-150 weeks depends on technology!"
    var goodinfo = "You are safe with this password!\nHackers wold need more than 100 years to crack it!"

    if (length <= 8)
    {document.getElementById("passinfo").innerHTML = weekinfo;
    document.getElementById('passinfo').style.color = '#FF6666';
    document.getElementById('padlock').style.color = '#FF6666';
    document.getElementById("padlock").style.borderColor = '#FF6666'};

    if (length >= 9 && length <= 10)
    {document.getElementById("passinfo").innerHTML = mediuminfo;
    document.getElementById('passinfo').style.color = '#FFB266';
    document.getElementById('padlock').style.color = '#FFB266';
    document.getElementById("padlock").style.borderColor = '#FFB266'};

    if (length > 10)
    {document.getElementById("passinfo").innerHTML = goodinfo;
    document.getElementById('passinfo').style.color = '#31C48D';
    document.getElementById('padlock').style.color = '#31C48D';
    document.getElementById("padlock").style.borderColor = '#31C48D'};
}



