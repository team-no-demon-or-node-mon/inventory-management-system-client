const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowInventoryItem = event => {
  event.preventDefault()
  api.showInventoryItem()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onIndexInventory = event => {
  event.preventDefault()
  api.indexInventory()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateItem = event => {
  console.log(event)
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.createItemFailure)
}

const onDeleteItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteItem(data)
    .then(ui.deleteItemSuccess)
    .catch(ui.deleteItemFailure)
}

const onUpdateItem = event => {
  event.preventDefault()
  const currUserId = store.user.id
  const updateItemData = {
    user_id: currUserId
    // id: $('#update-id').val(),
    // source: $('#update-source').val(),
    // amount: $('#update-amount').val(),
    // category: $('#update-category').val(),
    // description: $('#update-description').val()
  }
  const data = {
    item: updateItemData
  }
  api.updateItem(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.export = {
  onShowInventoryItem,
  onIndexInventory,
  onCreateItem,
  onDeleteItem,
  onUpdateItem
}
