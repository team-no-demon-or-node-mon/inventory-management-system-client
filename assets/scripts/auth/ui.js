'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#authMessage').text('Signed up successfully. Sign in below!')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  // $('#sign-up').hide()
  $('.forms').val('')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = data => {
  $('#authMessage').text('Signed up failed....try again')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('.forms').val('')
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
  $('.forms').val('')
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
  $('.forms').val('')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#authmessage').text('Password changed successfully')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  $('.forms').val('')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#authmessage').text('Error on password change')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('.forms').val('')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#authmessage').text('Signed out successfully')
  store.user = null
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  $('#sign-out').hide()
  $('#change-password').hide()
  // $('#onescheme').hide()
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
