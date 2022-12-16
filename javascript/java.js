// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//   fields.firstName = document.getElementById('firstName');
//   fields.lastName = document.getElementById('lastName');
//   fields.email = document.getElementById('email');
//   fields.address = document.getElementById('address');
//   fields.age = (document.getElementById('age').value);
//   fields.age = (document.querySelector('#age').value);
//  })

const checkAge = () => {
  let ageInput = parseInt(document.querySelector('#age').value)
  const entryGranted =  document.querySelector("#entry");
  
   if(ageInput >= 18 && ageInput <= 90) {
    entryGranted.innerHTML = "You May Enter";
   } else if(ageInput >= 13 && ageInput <= 17) {
     entryGranted.innerHTML = "You are not old enough"
   } else {
     entryGranted.innerHTML = "Shouldn't you be in bed by now?"
   }
 }

  document.getElementById('submit').addEventListener('click', checkAge);