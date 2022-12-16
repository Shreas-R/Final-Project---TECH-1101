function showInput() {
  var nameInput = document.getElementById("name").value;
  var ageInput = document.getElementById("age").value;
  var emailInput = document.getElementById("e-mail").value;
  var addressInput = document.getElementById("address").value;
  var messageInput = document.getElementById("message").value;
  document.getElementById("display").innerHTML = nameInput;
  document.getElementById("display").innerHTML = ageInput;
  document.getElementById("display").innerHTML = emailInput;
  document.getElementById("display").innerHTML = addressInput;
  document.getElementById("display").innerHTML = messageInput;
}
 
 
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
