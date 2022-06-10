const passwordConfirm = document.querySelector('#password-confirm');
const passwordWarning = document.createElement('span');
passwordWarning.style.color = 'red';
passwordWarning.textContent = '* Passwords do not match!';
passwordWarning.style.position = 'absolute';
passwordWarning.style.left = '0';
passwordWarning.style.top = '3.3rem';
passwordWarning.style.textTransform = 'none';

passwordConfirm.addEventListener("focusout", function(event) {
  const password = document.querySelector('#password');
  if(password.value !== this.value) {
    this.classList.add('invalid');
    this.after(passwordWarning);
  }
  else {
    this.classList.remove('invalid');
    this.nextSibling.remove();
  }
});