document.getElementById('submit-btn').addEventListener('click', function() {

  // capture the username 

  const userName = document.getElementById('user-name');
  const userNameInValue = userName.value;
  
  // capture the password 

  const password = document.getElementById('user-password');
  const passwordInValue = password.value;

  // Log-in condition

  if(userNameInValue == 'azzizul.hakim@gmail.com' && passwordInValue == '12345') {
    window.location.href = "bank-logged-in.html";
  }

  else {
    alert('Wrong Credentials. Try again with correct one');
  }
})