// step-1 : Add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 get the email address inside the input place 
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   
    // step-3 get password 
    // 1. set id on  the html element 
    // 2.get the element 
    // 3. get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password);
    // step -4 verify email and password 
    if(email==='sontan@baap.com'&& password==='secret'){
        window.location.href='bank.html';
    }
    else{
        alert('Tmi password vule geco');
    }
})
