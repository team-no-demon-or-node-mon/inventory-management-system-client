const config = require('./config')
const store = require('./store.js')

const showInventoryItem = (data) =>
  $.ajax({
    url: config.apiUrl + '/inventory/' + $('#show-id').val(),
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
const indexInventory = () =>
  $.ajax({
    url: config.apiUrl + '/inventory',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

module.export = {
  showInventoryItem,
  indexInventory
}
