const showItemsTemplate = require('../templates/item-listing.handlebars')
const showOneItemTemplate = require('../templates/single-item-listing.handlebars')
const api = require('./api.js')

const resetForms = () => {
  $('#show-item')[0].reset()
  $('#index-items')[0].reset()
  $('#create-item')[0].reset()
  $('#delete-item')[0].reset()
  $('#update-item')[0].reset()
  $('#results').text('')
}

const showSuccess = (response) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: response })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('Item:')
  $('#auth-message').text('')
}

const showFailure = (data) => {
  resetForms()
  $('#results-message').text('Show Inventory Failed')
  $('#auth-message').text('')
}

const indexSuccess = (response) => {
  resetForms()
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('')
  $('#auth-message').text('')
}

const indexSuccess1 = (response) => {
  resetForms()
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#auth-message').text('')
}

const indexFailure = () => {
  resetForms()
  $('#results-message').text('Could Not Retrieve Inventory')
  $('#auth-message').text('')
}

const deleteSuccess = (data) => {
  resetForms()
  $('#auth-message').text('')
  $('#results-message').text('Item Deleted Successfully')
  api.indexItemsTwo()
    .then(indexSuccess1)
}

const deleteFailure = () => {
  resetForms()
  $('#results-message').text('Error deleting item')
  $('.forms').val('')
  $('#auth-message').text('')
}

const updateSuccess = (data) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('Item successfully updated')
  $('#auth-message').text('')
  api.indexItemsTwo()
    .then(indexSuccess1)
}

const updateFailure = () => {
  resetForms()
  $('#results-message').text('Could Not Update Item')
  $('#auth-message').text('')
}

const createSuccess = (data) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('Item Successfully Created')
  $('#auth-message').text('')
}

const createFailure = (data) => {
  $('#results-message').text('Create Item Failed')
  $('#auth-message').text('')
  resetForms()
}

module.exports = {
  showSuccess,
  showFailure,
  indexSuccess,
  indexFailure,
  deleteSuccess,
  deleteFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  indexSuccess1
}
