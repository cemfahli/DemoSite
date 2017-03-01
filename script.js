function myLinks() {
  var pos = 0;
  var elem = document.getElementById("links");
  var id = setInterval(frame, 5);

  function frame() {
    if (pos == 98) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.width = pos + "%";
    }
  }
  var elem2 = document.getElementById("scrollButton");
  elem2.innerHTML = "Back";
  elem2.onclick= function(){
    Back();
  }
}

function Back() {
    var pos = 98;
    var elem = document.getElementById("links");
    var id = setInterval(frame, 5);

    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--;
        elem.style.width = pos + "%";
      }
    }
    var elem2 = document.getElementById("scrollButton");
    elem2.innerHTML = "Links";
    elem2.onclick = function(){
      myLinks();
    }

  }