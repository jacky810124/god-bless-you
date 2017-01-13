module.exports = () => {

  try {

    // const geoip = require('geoip-lite')
    const print = require('./scripts/output.js')

    // const ip = req.headers['x-forwarded-for'] || req.ip
    // const geo = geoip.lookup(ip)

    const geo = null

    if (geo === null) {

      print('buddha')

    } else {

      print('jesus')

    }

  } catch (error) {

    console.error(error)

  }

}
