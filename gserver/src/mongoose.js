const mongoose = require('mongoose');
const logger = require('./logger');



module.exports = function (app) {
  //app.get('mongodb')
const connectionURL = app.get('mongodb');
  mongoose.connect(
    connectionURL,
    { useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true}
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
