const resetForms = () => {
  $('#show-inventory')[0].reset()
  $('#index-inventory')[0].reset()
  $('#create-inventory')[0].reset()
  $('#destroy-inventory')[0].reset()
  $('#update-inventory')[0].reset()
  $('#results').html('')
}

const onShowSuccess = (response) => {
  resetForms()
  // const expenseHTML = (`
  //   <h6>ID: ${response.inventory.id}</h6>
  //   <p>Source: ${response.inventory.source}</p>
  //   <p>Amount: ${response.inventory.amount}</p>
  //   <p>Category: ${response.inventory.category}</p>
  //   <p>Description: ${response.inventory.description}</p>
  //   `)
  // $('#results').html(expenseHTML)
}

const onShowFailure = () => {
  resetForms()
  $('#results').html('Show Inventory Failed')
}

const onIndexSuccess = (response) => {
  resetForms()
  // response.inventoryItems.forEach(inventory => {
  //   const expenseHTML = (`
  //     <h6>ID: ${inventory.id}</h6>
  //     <p>Source: ${inventory.source}</p>
  //     <p>Amount: ${inventory.amount}</p>
  //     <p>Category: ${inventory.category}</p>
  //     <p>Description: ${inventory.description}</p>
  //     `)
  //    $('#results').append(expenseHTML)
  // })
}

const onIndexFailure = () => {
  resetForms()
  $('#results').html('Show All Inventory Failed')
}

module.export = {
  onShowSuccess,
  onShowFailure,
  onIndexSuccess,
  onIndexFailure
}
