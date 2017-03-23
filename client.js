var debug = require('debug')('express-gun:client')
var Gun = require('gun')
var gun = Gun(['http://localhost:3000/gun'])

var data = gun.get('data')
data.path('message').on(msg => {
  debug(`Message recieved ${JSON.stringify(msg, null, 3)}`)
})
