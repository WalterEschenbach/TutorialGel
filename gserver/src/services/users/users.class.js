const { Service } = require('feathers-mongoose');

exports.Users = class Users extends Service {
    create (data, params) {
        // This is the information we want from the user signup data
        const { email, password, githubId, name, googleId } = data;
        // Use the existing avatar image or return the Gravatar for the email
        const avatar = data.avatar || getGravatar(email);
        // Log data
        console.log('userData', data)
        // The complete user
        const userData = {
          email,
          name,
          password,
          githubId,
          avatar,
          googleId

        };
    
        // Call the original `create` method with existing `params` and new data
        return super.create(userData, params);
      }  
};
