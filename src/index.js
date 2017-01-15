module.exports = (type) => {

  try {

    // const geoip = require('geoip-lite')
    const print = require('./scripts/output.js')

    // const ip = req.headers['x-forwarded-for'] || req.ip
    // const geo = geoip.lookup(ip)

    if (type === 'jesus') {

      print('jesus')

    } else {

      print('buddha')

    }

  } catch (error) {

    console.error(error)

  }

}
