'use strict'

const signUpSuccess = data => {
  $('#authMessage').text('Signed up successfully. Sign in below!')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('#sign-up').hide()
  $('#password').val('')
  $('#email').val('')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = data => {
  $('#authMessage').text('Signed up successfully. Sign in below!')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('#sign-up').hide()
  $('#password').val('')
  $('#email').val('')
  console.log('signUpSuccess ran. Data is :', data)
}

module.exports =
{
  signUpFailure,
  signUpSuccess
}
