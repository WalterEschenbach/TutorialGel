const app = require('../../src/app');

describe('\'Walter\' service', () => {
  it('registered the service', () => {
    const service = app.service('walter');
    expect(service).toBeTruthy();
  });
});
