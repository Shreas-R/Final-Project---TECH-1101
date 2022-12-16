const checkAge = () => {
  let ageInput = parseInt(document.querySelector('#age').value)
  const entryGranted =  document.querySelector("#entry");
  
   if(ageInput > 17) {
    alert("Thank you for your message!");
   } else {
     alert("Must be over 18!");
   }
 }
 document.getElementById('submit').addEventListener('click', checkAge);

 $( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});
  



