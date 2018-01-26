'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// runs on signup submit
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // use next line of code to hide modal, although may want this is success ui?
  // $('#signUpModal').modal('hide')
  this.reset()
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
