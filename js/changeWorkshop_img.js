  function changeMe()
  {
    document.getElementById("changeMe").src = "images/" + getRandomImage();
  }

  <img id="changeMe" onLoad="changeMe()" src="images/default.jpg" />


 //JQuery
  $(document).ready(function(){
    $("#changeMe").src("images/" + getRandomImage());
  });

  function getRandomImage() {
  var images = ["image1.jpg","image2.jpg","image3.jpg"];

  return images[Math.floor(Math.random() * images.length)];
}