for (i=0;i<3;i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    switch(text){
      case "First":
        var audio = new Audio('au1.mp3');
        audio.play();
        break;
      case "Second":
        var audio = new Audio('au2.mp3');
        audio.play();
        break;
      case "Third":
        var audio = new Audio('au3.mp3');
        audio.play();
        break;

}
  });
}
