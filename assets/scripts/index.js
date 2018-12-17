const api = require('./items/api.js')
const ui = require('./items/ui.js')

const indexItems = function (event) {
  console.log('Alfred is nice')
  event.preventDefault()
  api.indexInventory()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

module.exports = {
  indexItems
}
