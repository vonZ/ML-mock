if (process.env.NODE_ENV === 'production') {
  module.exports = require('Store/configureStore.prod')
} else {
  module.exports = require('Store/configureStore.dev')
}
