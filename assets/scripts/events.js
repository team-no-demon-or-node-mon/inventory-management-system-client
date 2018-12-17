const api = require('./api.js')
const ui = require('./ui.js')

const onShowInventoryItem = (event) => {
  event.preventDefault()
  api.showInventoryItem()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onIndexInventory = (event) => {
  event.preventDefault()
  api.indexInventory()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

module.export = {
  onShowInventoryItem,
  onIndexInventory
}
