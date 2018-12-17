const resetForms = () => {
  $('#show-inventory')[0].reset()
  $('#index-inventory')[0].reset()
  $('#create-inventory')[0].reset()
  $('#destroy-inventory')[0].reset()
  $('#update-inventory')[0].reset()
  // $('#results').html('')
}

const onShowSuccess = (response) => {
  console.log(response)
  resetForms()
  const expenseHTML = (`
    <h6>ID: ${response.inventory.id}</h6>
    <p>Source: ${response.inventory.source}</p>
    <p>Amount: ${response.inventory.amount}</p>
    <p>Category: ${response.inventory.category}</p>
    <p>Description: ${response.inventory.description}</p>
    `)
  $('#results').html(expenseHTML)
}

const onShowFailure = (data) => {
  console.error('did not run', data)
  resetForms()
  $('#results').html('Show Inventory Failed')
}

const onIndexSuccess = (response) => {
  resetForms()
  response.inventoryItems.forEach(inventory => {
    const expenseHTML = (`
      <h6>ID: ${inventory.id}</h6>
      <p>Source: ${inventory.source}</p>
      <p>Amount: ${inventory.amount}</p>
      <p>Category: ${inventory.category}</p>
      <p>Description: ${inventory.description}</p>
      `)
    $('#results').append(expenseHTML)
  })
}

const deleteItemSuccess = (data) => {
  resetForms()
  $('#authmessage').text('Item deleted successfully')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('success')
  $('.forms').val('')
  console.log('deleteItemSuccess ran. Data is :', data)
}

const deleteItemFailure = error => {
  resetForms()
  $('#authmessage').text('Error on deleting item')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('.forms').val('')
  console.error('deleteItemFailure ran. Error is :', error)
}

const onIndexFailure = () => {
  resetForms()
  $('#results').html('Show All Inventory Failed')
}

const onUpdateSuccess = () => {
  resetForms()
  $('#results').html('Item Updated')
}

const onUpdateFailure = () => {
  resetForms()
  $('#results').html('Update Item Failed')
}

const onCreateSuccess = (data) => {
  console.log(data)
  $('#results').html('Item Created')
  resetForms()
}

const onCreateFailure = (data) => {
  console.error('create did not run. data is:', data)
  $('#results').html('Create Item Failed')
  resetForms()
}

module.export = {
  onShowSuccess,
  onShowFailure,
  onIndexSuccess,
  onIndexFailure,
  deleteItemSuccess,
  deleteItemFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
}
