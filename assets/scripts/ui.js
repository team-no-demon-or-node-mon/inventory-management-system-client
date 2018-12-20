'use strict'

const createItemSuccess = data => {
  $('#message').html('Successfully added Item')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
