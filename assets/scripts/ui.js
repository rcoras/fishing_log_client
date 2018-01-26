'use strict'

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

module.exports = {
  signUpSuccess,
  signUpFailure
}
