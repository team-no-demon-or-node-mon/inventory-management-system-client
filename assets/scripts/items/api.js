const config = require('../config.js')
const store = require('../store.js')

const showItem = (data) => {
  $.ajax({
    url: config.apiUrl + '/inventory/' + $('#show-id').val(),
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexItems = () => {
  $.ajax({
    url: config.apiUrl + '/inventory',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteItem = data => {
  return $.ajax({
    url: config.apiUrl + '/delete-item',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateItem = (data) => {
  $.ajax({
    url: config.apiUrl + '/items/' + $('#update-id').val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.export = {
  showItem,
  indexItems,
  createItem,
  deleteItem,
  updateItem
}
