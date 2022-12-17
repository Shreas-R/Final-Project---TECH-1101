

$(document).ready(function() {
  $("button").click(function() {
         
      var nameInput = $("input:text").val();
      document.getElementById("display").innerHTML = nameInput;
      
    });
  });
 
 $( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});
  

/* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
