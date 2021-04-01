const mongoose = require('mongoose');
const logger = require('./logger');

//app.get('mongodb')
const connectionURL = "mongodb+srv://weschenbach:losangeles29@tutorialgel.7rqbr.mongodb.net/TutorialGel?retryWrites=true&w=majority"

module.exports = function (app) {
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
