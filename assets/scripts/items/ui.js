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
  const itemHTML = (`
    <h6>ID: ${response.item._id}</h6>
    <p>UPC: ${response.item.upc}</p>
    <p>Description: ${response.item.description}</p>
    <p>Price: ${response.item.price}</p>
    <p>Cost: ${response.item.cost}</p>
    <p>Quantity: ${response.item.quantity}</p>
    <p>Average Daily Sales: ${response.item.ads}</p>
    `)
  $('#results').html(itemHTML)
}

const showFailure = (data) => {
  console.error('did not run', data)
  resetForms()
  $('#results').html('Show Inventory Failed')
}

const indexSuccess = (response) => {
  resetForms()
  console.log(response)
  response.items.forEach(items => {
    const itemHTML = (`
      <h6>ID: ${items._id}</h6>
      <p>UPC: ${items.upc}</p>
      <p>Description: ${items.description}</p>
      <p>Price: ${items.price}</p>
      <p>Cost: ${items.cost}</p>
      <p>Quantity: ${items.quantity}</p>
      <p>Average Daily Sales: ${items.ads}</p>
      `)
    $('#results').append(itemHTML)
  })
}

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
  $('#results').html('Item Updated')
}

const updateFailure = () => {
  resetForms()
  $('#results').html('Update Item Failed')
}

const createSuccess = (data) => {
  console.log(data)
  $('#results').html('Item Created')
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
