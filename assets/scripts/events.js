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
  // reset form fields
  this.reset()
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // reset form fields
  this.reset()
  // close modal window
  $('#signInModal').modal('hide')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
