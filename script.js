//this code validates that indeed the user has filled in all the fields
//if not, the user is prompted to do so
    function validateLoginForm(){
        if(document.forms['input']['usrname'].value == ''){
            alert('please provide a username!');
            document.forms['input']['usrname'].focus();
            return false
        }
        if(document.forms['input']['password'].value == ''){
            alert('Please provide password');
            document.forms['input']['password'].focus();
            return false
        }
        if(document.forms['input']['usrname'].value != '' && document.forms['input']['password'].value != ''){
            alert('You are logged in as ' + document.forms['input']['usrname'].value) 
            return false
        }
        return true;
        }
//this function validates the user login form
    function validateRegistrationForm(){
        if(document.forms['signup']['firstname'].value == ''){
            alert('please provide a firstname!');
            document.forms['signup']['firstname'].focus();
            return false;
        }
        if(document.forms['signup']['lastname'].value == ''){
            alert('Please provide lastname');
            document.forms['signup']['lastname'].focus();
            return false;
        }
         if(document.forms['signup']['username'].value == ''){
            alert('please provide a username!');
            document.forms['signup']['username'].focus();
            return false;
        }
        if(document.forms['signup']['email'].value == ''){
            alert('Please provide email');
            document.forms['signup']['email'].focus();
            return false;
        }
        if(document.forms['signup']['password'].value == ''){
            alert('please provide a password!');
            document.forms['signup']['password'].focus();
            return false;
        }
        alert('Congratulations!you have successfully created an account, navigate to the Login Page!')
        return true;
   }