function increase(id) {
  var element = document.querySelector(id);
  var count = parseInt(element.innerText);
  element.innerText = count + 1;
}

var index = 4;

function createMessage() {
  var rc = document.getElementById("rc");
  var newChild = document.createElement("div");
  newChild.className = "comment-container";

  var likes = 0;
  var message = prompt("What do you want to tell us?");
  var name = prompt("What is your name?");

  if (message == null || name == null) {
    return;
  } else if (message == "" || name == "") {
    return;
  }

  newChild.innerHTML =
    '<div class="top">' +
    '<div class="name">' +
    "<p>" +
    name +
    "</p>" +
    "</div>" +
    "<div class='likes'>" +
    "<p id=" +
    '"like' +
    "" +
    index +
    '"' +
    ">" +
    likes +
    "<p>like(s)</p></p>" +
    "<button onclick=" +
    "increase" +
    '("#like' +
    index +
    '"' +
    ")>Like</button>" +
    "</div>" +
    "</div>" +
    '<div class="bottom">' +
    '<div class="message">' +
    "<p>" +
    message +
    "</p>" +
    "</div>" +
    "</div>" +
    "</div>";

  rc.appendChild(newChild);
  index++;
}
