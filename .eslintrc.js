const ourOwnMedicine = require('./index');

module.exports = Object.assign({}, ourOwnMedicine, {
  "env": {
    "node": true
  },
  "rules": {
    // Ignore these because of copy/paste of auto-generated rules with comments
    "quote-props": 0,
    "quotes": 0,
    "key-spacing": 0,
    "max-len": 0,
    "object-property-newline": 0,
    "no-magic-numbers": 0
  }
});
