'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onShowItem = event => {
  event.preventDefault()
  api.showItem()
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onIndexItems = event => {
  event.preventDefault()
  api.indexItems()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onCreateItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onDeleteItem = event => {
  event.preventDefault()
  const data = $('#delete-id').val()
  api.deleteItem(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const onUpdateItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

module.exports = {
  onShowItem,
  onIndexItems,
  onCreateItem,
  onDeleteItem,
  onUpdateItem
}
