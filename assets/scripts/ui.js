'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('successful signed up')
  $('#closeSignUpButton').hide()
  $('#signInMessaging').text('You\'ve successfully signed up! Log in to start playing!')
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
}

const signInFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('sign-in').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
