'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('successful signed up')
  $('#closeSignUpButton').hide()
  $('#signInMessaging').text('You\'ve successfully signed up! Log in and start tracking your fishing trips!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed in!')
  // we use the code below to save the user data to use the token and id
  store.user = data.user
  $('#signInMessaging').text('You\'ve successfully signed in!')
  $('#closeSignInButton').hide()
  $('#closeSignUpButton').hide()
  $('#showChangePwButton').removeClass('hidden')
  $('#showSignOut').removeClass('hidden')
  $('#closeUpdateButton').removeClass('hidden')
}

const signInFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('sign-in').reset()
}

const changePasswordSuccess = function (data) {
  // console.log('Successfully changed password')
  $('#signInMessaging').text('Your password has been updated')
  document.getElementById('change-pw').reset()
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('change-pw').reset()
}

const signOutSuccess = function (data) {
  // console.log('Successfully signed out')
  store.user = null
  $('#signInMessaging').text('You\'re signed out!')
  $('#closeSignInButton').show()
  $('#closeSignUpButton').show()
  $('#gettrips').show()
  $('#showChangePwButton').addClass('hidden')
  $('#showSignOut').addClass('hidden')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
}

const addTripSuccess = function (data) {
  console.log('trip has been added')
  $('#signInMessaging').text('Your trip has been added')
  document.getElementById('add-trip-form').reset()
}

const addTripFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('add-trip-form').reset()
}

const getAllTripsSuccess = function (data) {
  console.log(data)
  console.log(data.trips)
  data.trips.forEach(trip => {
    const tripHtml = (
      `<ul>
      <li>Trip ID: ${trip.id}</li>
      <li>Date: ${trip.trip_date}</li>
      <li>Trip Length: ${trip.trip_length_hrs}</li>
      <li>Location: ${trip.location}</li>
      <li>Fish Caught: ${trip.no_of_fish_caught}</li>
      <li>Comments: ${trip.comments}</li>
      <ul>`)
    $('#trips-content').prepend(tripHtml)
  })
}
const getAllTrips = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
}

const deleteTripSuccess = function (data) {
  console.log('trip deleted')
  $('#signInMessaging').text('Your trip has been removed')
  document.getElementById('delete-trip').reset()
}

const deleteTripFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('delete-trip').reset()
}

const updateTripSuccess = function (data) {
  console.log('trip updated')
  $('#signInMessaging').text('Your trip has been updated')
  document.getElementById('update-trip-form').reset()
}

const updateTripFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('update-trip-form').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addTripSuccess,
  addTripFailure,
  getAllTripsSuccess,
  getAllTrips,
  deleteTripSuccess,
  deleteTripFailure,
  updateTripSuccess,
  updateTripFailure
}
