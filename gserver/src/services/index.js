const walter = require('./walter/walter.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(walter);
};
