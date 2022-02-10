document.getElementById('submit-btn').addEventListener('click', function (){
    
    // getting user's email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log('User Email: ',userEmail);

    // getting user's password
    const passwordField = document.getElementById('user-password');
    const userPassword  = passwordField.value;
    console.log('User Password: ', userPassword);
});