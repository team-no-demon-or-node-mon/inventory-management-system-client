'use strict'

const authEvents = require('./auth/events.js')
const itemEvents = require('./items/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#show-item').on('submit', itemEvents.onShowItem)
  $('#index-items').on('submit', itemEvents.onIndexItems)
  $('#create-item').on('submit', itemEvents.onCreateItem)
  $('#delete-item').on('submit', itemEvents.onDeleteItem)
  $('#update-item').on('submit', itemEvents.onUpdateItem)
  $('#register').on('click', authEvents.onRegClick)
  $('#login-top').on('click', authEvents.onLoginClick)
})
