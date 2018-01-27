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
//     data: {
//       'trip': {
//         'trip_date': 'trip[trip_date]',
//         'trip_length_hrs': 'trip[trip_length_hrs]',
//         'location': 'trip[location]',
//         'no_of_fish_caught': 'trip[no_of_fish_caught]',
//         'comments': 'trip[comments]',
//         'user_id': store.user.id
//       }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addTrip
}
