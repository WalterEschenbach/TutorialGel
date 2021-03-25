const { Service } = require('feathers-mongodb');

exports.Walter = class Walter extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('walter');
    });
  }
};
