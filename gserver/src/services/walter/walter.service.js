// Initializes the `Walter` service on path `/walter`
const { Walter } = require('./walter.class');
const hooks = require('./walter.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/walter', new Walter(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('walter');

  service.hooks(hooks);
};
