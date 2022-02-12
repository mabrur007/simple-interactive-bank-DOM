document.getElementById('submit-btn').addEventListener('click', function (){
    
    // getting user's email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log('User Email: ',userEmail);

    // getting user's password
    const passwordField = document.getElementById('user-password');
    const userPassword  = passwordField.value;
    // console.log('User Password: ', userPassword);

    // redirect from index.html to banking.html page
    if(userEmail == 'john@gmail.com' && userPassword == '1234'){
        window.location.href = 'banking.html';
    }
    else{
        console.log('Wrong email or password!');
    }

    // 
});

