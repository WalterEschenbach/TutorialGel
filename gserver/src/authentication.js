//AuthenticationService allows us to register authentication strategies and create access tokens.
//AuthenticationService is a Feathers service that allows to register different authentication strategies and manage access tokens using JWT.
//A Feathers service is an object or an instance of a class that implements certain methods.
//Services provide a uniform interface for how to interact with any kind of data.
const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth, OAuthStrategy } = require('@feathersjs/authentication-oauth');

class MyGithubStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    // Include the `email` from the GitHub profile when creating
    // or updating a user that logged in with GitHub
    const baseData = await super.getEntityData(profile);

    return {
      ...baseData,
      // You can also set the display name to profile.name
      name: profile.login,
      // The GitHub profile image
      avatar: profile.avatar_url,
      // The user email address (if available)
      email: profile.email
    };
  }
}


class MyGoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    // Include the `email` from the GitHub profile when creating
    // or updating a user that logged in with GitHub
    const baseData = await super.getEntityData(profile);
    console.log('baseData', baseData)
    return {
      ...baseData,
      avatar: profile.picture,
      email: profile.email
    };
  }
}

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('github', new MyGithubStrategy());
  authentication.register('google', new MyGoogleStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
