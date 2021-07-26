console.log("Working...");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function randomColor(){
      return "#F"+Math.trunc(Math.random()*100000);
  }
  document.getElementById("first-div").style.backgroundColor=randomColor();
  
  document.getElementById("second-div").style.backgroundColor=getRandomColor();
  document.getElementById("div").style.backgroundColor=getRandomColor();
  document.getElementById("third-div").style.backgroundColor=getRandomColor();

  document.documentElement.style.backgroundColor="#F1FFF9";
  