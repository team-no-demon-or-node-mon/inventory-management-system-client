const showItemsTemplate = require('../templates/item-listing.handlebars')
const showOneItemTemplate = require('../templates/single-item-listing.handlebars')

const resetForms = () => {
  $('#show-item')[0].reset()
  $('#index-items')[0].reset()
  $('#create-item')[0].reset()
  $('#delete-item')[0].reset()
  $('#update-item')[0].reset()
  $('#results').html('')
}

const showSuccess = (response) => {
  resetForms()
  console.log(response)
  const showItemsHtml = showOneItemTemplate({ item: response })
  $('#results').html(showItemsHtml)
}

const showFailure = (data) => {
  console.error('did not run', data)
  resetForms()
  $('#results').html('Show Inventory Failed')
}

const indexSuccess = (response) => {
  resetForms()
  console.log(response)
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  // prevent data adding onto itself with each "show books" click
  $('#results').append(showItemsHtml)
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
  $('#results').html('Show All Inventory Failed')
}

const deleteSuccess = (data) => {
  resetForms()
  $('#authmessage').text('Item deleted successfully')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  $('.forms').val('')
  console.log('deleteItemSuccess ran. Data is :', data)
}

const deleteFailure = error => {
  resetForms()
  $('#authmessage').text('Error on deleting item')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('.forms').val('')
  console.error('deleteItemFailure ran. Error is :', error)
}

const updateSuccess = () => {
  resetForms()
  $('#authmessage').html('Item Updated')
}

const updateFailure = () => {
  resetForms()
  $('#results').html('Update Item Failed')
}

const createSuccess = (data) => {
  console.log(data)
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('#results').empty()
  // prevent data adding onto itself with each "show books" click
  $('#results').append(showItemsHtml)
  $('#authmessage').html('Item Created')
  resetForms()
}

const createFailure = (data) => {
  console.error('create did not run. data is:', data)
  $('#results').html('Create Item Failed')
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
