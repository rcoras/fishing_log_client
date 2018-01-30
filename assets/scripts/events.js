'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// runs on signup submit
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // close modal window
  $('#signUpModal').modal('hide')
  this.reset()
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  this.reset()
  // close modal window
  $('#signInModal').modal('hide')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  $('#changePwModal').modal('hide')
  this.reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  $('#message').text('')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddTrip = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  // close modal window
  $('#addModal').modal('hide')
  this.reset()
  // console.log(data)
  api.addTrip(data)
    .then(ui.addTripSuccess)
    .catch(ui.addTripFailure)
}

const onGetAllTrips = function (event) {
  event.preventDefault()
  api.getAllTrips()
    .then(ui.getAllTripsSuccess)
    .catch(ui.getAllTripsFailure)
}

const onDeleteTrips = function (event) {
  const data = getFormFields(event.target)
  const trip = data.id
  event.preventDefault()
  this.reset()
  // close modal window
  $('#deleteTripModal').modal('hide')
  api.deleteTrip(trip)
    .then(ui.deleteTripSuccess)
    .catch(ui.deleteTripFailure)
}

const onUpdateTrip = function (event) {
  const data = getFormFields(event.target)
  // const trip = data.id
  event.preventDefault()
  this.reset()
  $('#updateModal').modal('hide')
  api.updateTrip(data)
    .then(ui.updateTripSuccess)
    .catch(ui.updateTripFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#add-trip-form').on('submit', onAddTrip)
  $('#get-trips').on('click', onGetAllTrips)
  $('#delete-trip').on('submit', onDeleteTrips)
  $('#update-trip-form').on('submit', onUpdateTrip)
}

module.exports = {
  addHandlers
}
