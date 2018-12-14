'use strict'

const store = require('../store.js')

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
  $('#authMessage').text('Signed up failed....try again')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('#sign-up').hide()
  $('#password').val('')
  $('#email').val('')
  console.log('signUpSuccess ran. Data is :', data)
}

const signInSuccess = data => {
  store.user = data.user
  $('#authmessage').text('Signed in successfully')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#password').val('')
  $('#email').val('')
  // $('#scheme-create').show()
  // /$('#schemes-update').show()
  // $('#scheme-delete').show()
  // $('#deletemessage').show()
  // $('#submitmessage').show()
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#authmessage').text('Error on sign in')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#password').val('')
  $('#email').val('')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#authmessage').text('Password changed successfully')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  $('#oldpassword').val('')
  $('#newpassword').val('')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#authmessage').text('Error on password change')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#oldpassword').val('')
  $('#newpassword').val('')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#authmessage').text('Signed out successfully')
  store.user = null
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  $('#sign-out').hide()
  $('#scheme-create').hide()
  $('#schemes-update').hide()
  $('#scheme-delete').hide()
  $('#submitmessage').hide()
  $('#change-password').hide()
  // $('#onescheme').hide()
  $('#deletemessage').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  //    .catch()
}

const signOutFailure = error => {
  $('#authmessage').text('Error on sign out')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
