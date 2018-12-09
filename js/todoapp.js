function createDiv() {
  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  var input = document.getElementById("myInput").value;
  var text = document.createTextNode(input);
  h2.appendChild(text);
  div.appendChild(h2);
  div.className = "list-item";

  if (input === "") {
    document.getElementById("myInput").classList.add("alert-border");
    document.getElementById("alert").style.display = "block";
  } else {
    var warning = document.getElementsByClassName("alert");
    document.getElementById("list-container").appendChild(div);
    document.getElementById("myInput").classList.remove("alert-border");
    document.getElementById("alert").style.display = "none";
  }

  var span = document.createElement("span");
  var x = document.createTextNode("x");
  span.classList.add("close");
  span.appendChild(x);
  div.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  document.forms["todo"].reset();
}
