
//Range Slider
function modifyOffset() {
  var el, newPoint, newPlace, offset, siblings, k;
  width = this.offsetWidth;
  newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
  offset = -1;
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
  const copyText = document.getElementById("text");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 100); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}


//Generate Password

function GeneratePassword() {

    // Get the value from range slider
    const length = document.getElementById("slider").value;

    // Create list with characters for password creation

    const alphabet = '#$%&0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

    // Generating password

    const password = []
    for (let i = 0; i < length; i++)
    {
        const index = Math.floor(Math.random() * 66);
        single_char = alphabet[index]
        password.push(single_char)

        for (let i = password.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [password[i], password[j]] = [password[j], password[i]];
        }
    }

    const final_password = password.join("")
    document.getElementById("text").value = final_password;


    // Changing passinfo
    let week_info = "WARNING!!! Password length is easy to crack.\nIt will take hackers less than 1 hour to crack it!\nTry to use recommend length of password: 16!"
    let medium_info = "Your password is NOT easy to crack.\nHackers needs much more time to crack you, but it is still possible!\nThey will need about 1-20 weeks depends on technology!"
    let strong_info = "You are safe with this password!\nHackers would need more than 30 years to crack it!\nIf you use recommended length of 16 characters - hackers will need 92 billions of years to crack it!"

    let red_color = '#FF6666'
    let orange_color = '#FFB266'
    let green_color = '#31C48D'

    if (length <= 8)
    {document.getElementById("passinfo").innerHTML = week_info;
    document.getElementById('passinfo').style.color = red_color;
    document.getElementById('padlock').style.color = red_color;
    document.getElementById("padlock").style.borderColor = red_color};

    if (length >= 9 && length <= 10)
    {document.getElementById("passinfo").innerHTML = medium_info;
    document.getElementById('passinfo').style.color = orange_color;
    document.getElementById('padlock').style.color = orange_color;
    document.getElementById("padlock").style.borderColor = orange_color};

    if (length > 10)
    {document.getElementById("passinfo").innerHTML = strong_info;
    document.getElementById('passinfo').style.color = green_color;
    document.getElementById('padlock').style.color = green_color;
    document.getElementById("padlock").style.borderColor = green_color};
}



