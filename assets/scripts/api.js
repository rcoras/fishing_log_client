'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addTrip = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllTrips = function () {
  // console.log('this is happening in the api call')
  return $.ajax({
    url: config.apiOrigin + '/trips',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// headers: {
//   Authorization: 'Token token=' + store.user.token
// }

const deleteTrip = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/trips/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrip = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/trips/' + data.trip.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getOneTrip = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/trips/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addTrip,
  getAllTrips,
  deleteTrip,
  updateTrip,
  getOneTrip
}
