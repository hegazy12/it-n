//nada nabil start//
let stars = document.querySelector(".stars");
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let hhh = document.querySelector('.hhh');
console.log(hhh);
window.onscroll = function () {
  var value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 3 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  hhh.style.fontSize = value + 'px';
  if (scrollY >= 67) {
    hhh.style.fontSize = 67 + 'px';
    hhh.style.position = 'fixed';
    if (scrollY >= 410) {
      hhh.style.display = 'none';
    } else {
      hhh.style.display = 'block';
    }
    if (scrollY >= 127) {
      document.querySelector('.mainnn').style.background = 'linear-gradient(#376281,#10001f)';
    } else {
      document.querySelector('.mainnn').style.background = 'linear-gradient(#200016,#10001f)';
    }
  }
}

var a;
function on() {
  if (a == 1) {
    document.getElementById('tokyo').style.display = "block";
    return a = 0;
  }
  else {
    document.getElementById('tokyo').style.display = "none";
    return a = 1;
  }
}
var a;
function on1() {
  if (a == 1) {
    document.getElementById('kyoto').style.display = "block";
    return a = 0;
  }
  else {
    document.getElementById('kyoto').style.display = "none";
    return a = 1;
  }
}
var a;
function on2() {
  if (a == 1) {
    document.getElementById('osaka').style.display = "block";
    return a = 0;
  }
  else {
    document.getElementById('osaka').style.display = "none";
    return a = 1;
  }
}


//nada nabil end//
