// Buttons beside TrintyCraft logo
function ipcopy() {
  var text = "mctrinitycraft.com";
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  document.getElementById("randomshit").innerHTML = "Copied to clipboard";
}

function donateclick() {
  var link = "http://trinitycraftdonate.buycraft.net/";
  window.open(link);
}

function removedontip() {
  var donate = document.getElementById("tdonate");
  var tip = document.getElementById("tip");
  donate.parentNode.removeChild(tip);
  tip.parentNode.removeChild(tdonate);
}

// Shrinking of TrinityCraft on scroll and add TrinityCraft logo to navbar
function tcResize() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 100,
  headerEl = document.getElementById("trinitytop");

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  }

  else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener("scroll", tcResize);

function trinityNavMove() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  moveOn = 110,
  headerEl = document.getElementById("trinitynav");
  navUl = document.getElementById("navul");
  tCurrent = document.getElementById("tcurrent");

  if (distanceY > moveOn) {
    headerEl.classList.add("appear");
    navUl.classList.add("appear");
    tCurrent.classList.add("appear");
  }

  else {
    headerEl.classList.remove("appear");
    navUl.classList.remove("appear");
    tCurrent.classList.remove("appear");
  }
}

window.addEventListener("scroll", trinityNavMove);

// Mobile navigation button
var iconxCounter = 0;

function iconx() {
  iconxChilds = document.getElementById("icon-x");
  if (iconxCounter == 0) {
    iconxChilds.classList.add("open");
    iconxCounter = iconxCounter + 1;
    iconxDrop();
  }
  else {
    iconxChilds.classList.remove("open");
    iconxCounter = iconxCounter - 1;
    iconxDrop();
  }
}

function iconxDrop() {
  if (iconxCounter == 1) {
    document.getElementById("mobileafternav").style.display = "inline";
  }
  else {
    document.getElementById("mobileafternav").style.display = "none";
  }
}
