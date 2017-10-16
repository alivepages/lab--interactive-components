var errors = [
  'username',
  'user-password',
  'confirm-password',
  'tax-id',
  'account',
  'terms-of-service'
]
clean();
var registerForm = document.forms.register;

function setError(field, msg) {
  var error = document.querySelector('.validation--' + field);
  error.innerHTML = msg;
  return true;
}

function clean() {
  for (i = 0; i < errors.length; i++) {
    setError(errors[i], '');
  }
}

function setSuccess(field) {
    setError(field, 'Success');
}

registerForm.addEventListener('submit', function(e) {
  var error = false;
  e.preventDefault();
  clean();

  // valido usuario
  var username = registerForm.elements.username.value;
  if (username.trim() === '') {
    error = setError('username', 'Username cannot be blank');
  } else {
    setSuccess('username');
  }

  // valido password
  var userpassword = registerForm.elements.userpassword.value;
  if (userpassword.length < 8) {
    error = setError('user-password', 'Password must have a minimum of 8 character');
  } else {
    setSuccess('user-password');
  }

  // valido password
  var confirmpassword = registerForm.elements.confirmpassword.value;
  if (confirmpassword !== userpassword) {
    error = setError('confirm-password', 'Passwords must match');
  } else {
    setSuccess('confirm-password');
  }

  // valido taxt id
  var taxid = registerForm.elements.taxid.value;
  if (taxid.trim() === '') {
    error = setError('tax-id', 'Must provide Tax Id number');
  } else {
    var isnum = /^\d+$/.test(taxid);
    if (!isnum || taxid.length < 10) {
      error = setError('tax-id', 'Tax Id number is only numbers and is 1o digits');
    } else {
      setSuccess('tax-id');
    }
  }

  // valido account
  var account = registerForm.elements.account;
  if (account.selectedIndex < 1) {
    error = setError('account', 'Must select account type');
  } else {
    setSuccess('account');
  }

  // valido term of services
  var termsofservice = registerForm.elements.termsofservice;
  if (!termsofservice.checked) {
    error = setError('terms-of-service', 'Must approve terms of service');
  } else {
    setSuccess('terms-of-service');
  }

  if (!error) {
    setError('entire-form', 'Form complete')
  }
})
