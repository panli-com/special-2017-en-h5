//main  

// var notyf = new Notyf();
function navClickIndex(index) {
  $(".floor").addClass("hide");
  $("#floor_" + index).removeClass("hide");
}

// ;
(function() {
  // Create an instance of Notyf
  // var notyf = new Notyf();

  window.onload = function() {

    FastClick.attach(document.body);

    $('#nav-tap').navbarscroll({
      defaultSelect: 0,
      scrollerWidth: 3,
      fingerClick: 0,
      endClickScroll: function(obj) {
        console.log(obj)
        var index = obj.index()
        navClickIndex(index + 1)
      }
    });

  }
})()