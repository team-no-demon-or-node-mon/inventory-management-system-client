'use strict'

$('#change-password').hide()
$('#change-password-nav').hide()
$('#sign-out').hide()
$('#show-item').hide()
$('#index-items').hide()
$('#create-item').hide()
$('#delete-item').hide()
$('#update-item').hide()
$('#signup-box').hide()
$('#login-top').hide()

const store = require('../store.js')

const signUpSuccess = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Signed up successfully.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.forms').val('')
}

const signUpFailure = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Signed up failed....try again')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.forms').val('')
}

const signInSuccess = data => {
  $('#auth-message').text('')
  store.user = data.user
  $('#auth-message').text('Signed in successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password-nav').show()
  $('.forms').val('')
  $('#show-item').show()
  $('#index-items').show()
  $('#create-item').show()
  $('#delete-item').show()
  $('#update-item').show()
  $('#register').hide()
  $('#login-top').hide()
}

const signInFailure = () => {
  $('#auth-message').text('')
  $('#auth-message').text('Error on sign in')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('.forms').val('')
}

const changePasswordSuccess = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Password changed successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.forms').val('')
}

const changePasswordFailure = () => {
  $('#auth-message').text('')
  $('#auth-message').text('Error on password change')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('.forms').val('')
}

const signOutSuccess = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Signed out successfully')
  store.user = null
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#show-item').hide()
  $('#index-items').hide()
  $('#create-item').hide()
  $('#delete-item').hide()
  $('#update-item').hide()
  $('#results').text('')
  $('#results-message').text('')
  $('#register').show()
}

const signOutFailure = () => {
  $('#auth-message').text('')
  $('#auth-message').text('Error on sign out')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
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
