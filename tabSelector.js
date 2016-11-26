function openTab(category) {
  var i;
  var x = document.getElementsByClassName("infoSection");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  document.getElementById(category).style.display = "block";
}

window.onload = function(){
  openTab("news")

  $('.nav li').click(function(){
      console.log('clicked');
      $('.nav li').removeClass('active');
      $(this).addClass('active');
    });

}
