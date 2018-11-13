// Welcome page image slider
var counter = 0;

setInterval(function() {
  image = document.getElementById("welcomeslider").getElementsByTagName("IMG")[0];
  image.src = "./images/image" + counter + ".png";
  counter++;
  if (counter == 3) {
    counter = 0;
  }
}, 9000);
