const showItemsTemplate = require('../templates/item-listing.handlebars')
const showOneItemTemplate = require('../templates/single-item-listing.handlebars')
// const authClear = require('./auth.ui.js')



const resetForms = () => {
  $('#show-item')[0].reset()
  $('#index-items')[0].reset()
  $('#create-item')[0].reset()
  $('#delete-item')[0].reset()
  $('#update-item')[0].reset()
  $('#results').text('')
  $('#resultsMessage').text('')
}

const showSuccess = (response) => {
  resetForms()
  console.log(response)
  const showItemsHtml = showOneItemTemplate({ item: response })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#resultsMessage').text('Item:')
}

const showFailure = (data) => {
  console.error('did not run', data)
  resetForms()
  $('#results').text('Show Inventory Failed')
}

const indexSuccess = (response) => {
  resetForms()
  console.log(response)
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  // prevent data adding onto itself with each "show books" click
  $('#results').append(showItemsHtml)
  $('#resultsMessage').text('Inventory:')
}
//
// const clearBooks = () => {
//   $('.content').empty()
// }
//
// const failure = (error) => {
//   console.error(error)
// }

const indexFailure = () => {
  resetForms()
  $('#resultsMessage').text('Could Not Retrieve Inventory')
}

const deleteSuccess = (data) => {
  resetForms()
  $('#resultsMessage').text('Item deleted successfully')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  $('.forms').val('')
  console.log('deleteItemSuccess ran. Data is :', data)
  // after item is deleted, show list of items with ommission
  api.indexItems()
    .then(indexSuccess)
}

const deleteFailure = error => {
  resetForms()
  $('#resultsMessage').text('Error deleting item')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('.forms').val('')
  console.error('deleteItemFailure ran. Error is :', error)
}

const updateSuccess = (data) => {
  resetForms()
  console.log(data)
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#resultsMessage').text('Item successfully updated')
}

const updateFailure = () => {
  resetForms()
  $('#resultsMessage').text('Could Not Update Item')
}

const createSuccess = (data) => {
  resetForms()
  console.log(data)
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#resultsMessage').text('Item Successfully Created')
}

const createFailure = (data) => {
  console.error('create did not run. data is:', data)
  $('#resultsMessage').text('Create Item Failed')
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
  updateFailure
}
