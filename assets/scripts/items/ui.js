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
  // $('#resultsMessage').text('')
}

const showSuccess = (response) => {
  resetForms()
  console.log(response)
  const showItemsHtml = showOneItemTemplate({ item: response })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results2').text('')
  $('#results3').text('')
  $('#resultsMessage').text('Item:')
  $('#authMessage').text('')
}

const showFailure = (data) => {
  console.error('did not run', data)
  resetForms()
  $('#results2').text('')
  $('#results3').text('')
  $('#resultsMessage').text('Show Inventory Failed')
  $('#authMessage').text('')
}

const indexSuccess = (response) => {
  resetForms()
  console.log(response)
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  // prevent data adding onto itself with each "show books" click
  $('#results').append(showItemsHtml)
  // $('#resultsMessage').text('Inventory:')
  $('#resultsMessage').text('')
  $('#authMessage').text('')
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
  $('#results3').text('')
  $('#results2').text('')
  $('#resultsMessage').text('Could Not Retrieve Inventory')
  $('#authMessage').text('')
}

const deleteSuccess = (data) => {
  resetForms()
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  console.log('deleteItemSuccess ran. Data is :', data)
  $('#authMessage').text('')
  // after item is deleted, show list of items with ommission
  // const showItemsHtml = showItemsTemplate({ data: data. })
  // $('#results').append(showItemsHtml)
  // $('#resultsMessage').text('Item Deleted Successfully')
  $('#results2').text('')
  $('#results3').text('')
  $('#results2').text('Item Deleted Successfully')
  api.indexItems()
    .then(indexSuccess)
}

const deleteFailure = error => {
  resetForms()
  $('#results2').text('')
  $('#results3').text('')
  $('#resultsMessage').text('Error deleting item')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('.forms').val('')
  $('#authMessage').text('')
  console.error('deleteItemFailure ran. Error is :', error)
}

const updateSuccess = (data) => {
  resetForms()
  console.log(data)
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results2').text('')
  $('#results3').text('Item successfully updated')
  $('#authMessage').text('')
  api.indexItems()
    .then(indexSuccess)
}

const updateFailure = () => {
  resetForms()
  $('#results2').text('')
  $('#results3').text('')
  $('#resultsMessage').text('Could Not Update Item')
  $('#authMessage').text('')
}

const createSuccess = (data) => {
  resetForms()
  console.log(data)
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results2').text('')
  $('#results3').text('')
  $('#resultsMessage').text('Item Successfully Created')
  $('#authMessage').text('')
}

const createFailure = (data) => {
  console.error('create did not run. data is:', data)
  $('#results2').text('')
  $('#results3').text('')
  $('#resultsMessage').text('Create Item Failed')
  $('#authMessage').text('')
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
