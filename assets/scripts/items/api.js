'use strict'

const config = require('../config.js')
const store = require('../store.js')

const showItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items/' + $('#show-id').val(),
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexItems = () => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items/' + $('#delete-id').val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items/' + $('#update-id').val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showItem,
  indexItems,
  createItem,
  deleteItem,
  updateItem
}
