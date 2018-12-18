'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store.js')

const onShowItem = event => {
  event.preventDefault()
  api.showInventoryItem()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onIndexItems = event => {
  event.preventDefault()
  api.indexItems()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateItem = event => {
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
  // const currUserId = store.user.id
  // const updateItemData = {
  //   user_id: currUserId,
  //   id: $('#update-id').val(),
  //   upc: $('#update-upc').val(),
  //   description: $('#update-description').val(),
  //   price: $('#update-price').val(),
  //   cost: $('#update-cost').val(),
  //   quantity: $('#update-quantity').val(),
  //   ads: $('#update-ads').val()
  // }
  // const data = {
  //   item: updateItemData
  // }
  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onShowItem,
  onIndexItems,
  onCreateItem,
  onDeleteItem,
  onUpdateItem
}
