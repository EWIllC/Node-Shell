const request = require('request')

module.exports = curl = (done) => {request(req, (error, res, body) => {
    done(body)
})}

