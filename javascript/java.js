// const checkInput = () => {
//   let nameInput = parseInt(document.querySelector('#name').value)
//   let emailInput = parseInt(document.querySelector('#e-mail').value)
//   let addressInput = parseInt(document.querySelector('#address').value)
//   let messageInput = parseInt(document.querySelector('#message').value)
//   let ageInput = parseInt(document.querySelector('#age').value)
//   const entryGranted =  document.querySelector("#entry");
//    if(nameInput == ''){
//     entryGranted.innerHTML = "Please Fill Name section";
//    }
//    if(emailInput == ''){
//     entryGranted.innerHTML = "Please Fill E-mail section";
//    }
//    if(addressInput == ''){
//     entryGranted.innerHTML = "Please Fill Address section";
//    }
//    if(messageInput == ''){
//     entryGranted.innerHTML = "Please Fill Message section";
//    }
//    if(ageInput > 17) {
//     alert("Thank you for your message!");
//    } else {
//     alert("Must be over 18!");
//    }
//  }
//  document.getElementById('submit').addEventListener('click', checkAge);

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



