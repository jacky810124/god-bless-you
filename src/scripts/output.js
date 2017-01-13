module.exports = (type) => {

  try {

    console.log(require(`../assets/${type}.js`))

  } catch (error) {

    throw error

  }

}
