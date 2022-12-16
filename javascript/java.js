const checkAge = () => {
  let ageInput = parseInt(document.querySelector('#age').value)
  const entryGranted =  document.querySelector("#entry");
  
   if(ageInput > 17) {
    alert("we will contact you shortly");
   } else {
     alert("Must be over 18");
   }
 }
  
 document.getElementById('submit').addEventListener('click', checkAge);
