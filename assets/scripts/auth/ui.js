'use strict'

$('#change-password').hide()
$('#sign-out').hide()
$('#show-item').hide()
$('#index-items').hide()
$('#create-item').hide()
$('#delete-item').hide()
$('#update-item').hide()

const store = require('../store.js')
const authMessageClear = () => {
  $('#authMessage').text('')
}
// const ui = require('./ui.js')

const signUpSuccess = data => {
  authMessageClear()
  $('#authMessage').text('Signed up successfully.')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  // $('#sign-up').hide()
  $('.forms').val('')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = data => {
  authMessageClear()
  $('#authMessage').text('Signed up failed....try again')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('.forms').val('')
  console.log('signUpFailure ran. Data is :', data)
}

const signInSuccess = data => {
  authMessageClear()
  store.user = data.user
  $('#authMessage').text('Signed in successfully')
  console.log('facts')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.forms').val('')
  $('#show-item').show()
  $('#index-items').show()
  $('#create-item').show()
  $('#delete-item').show()
  $('#update-item').show()

  // $('#scheme-create').show()
  // /$('#schemes-update').show()
  // $('#scheme-delete').show()
  // $('#deletemessage').show()
  // $('#submitmessage').show()
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  authMessageClear()
  $('#authMessage').text('Error on sign in')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
  $('.forms').val('')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  authMessageClear()
  $('#authMessage').text('Password changed successfully')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  $('.forms').val('')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  authMessageClear()
  $('#authMessage').text('Error on password change')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
  $('.forms').val('')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  authMessageClear()
  // ui.resetForms()
  $('#authMessage').text('Signed out successfully')
  store.user = null
  $('#authMessage').removeClass()
  $('#authMessage').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  $('#sign-out').hide()
  $('#change-password').hide()
  // $('#onescheme').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#show-item').hide()
  $('#index-items').hide()
  $('#create-item').hide()
  $('#delete-item').hide()
  $('#update-item').hide()
  $('#results').text('')
  $('#resultsMessage').text('')
  // ui.resetForms()
  //    .catch()
}

const signOutFailure = error => {
  authMessageClear()
  $('#authMessage').text('Error on sign out')
  $('#authMessage').removeClass()
  $('#authMessage').addClass('failure')
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
