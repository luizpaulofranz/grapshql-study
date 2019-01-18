const fakeObject = require('./fake-objects');

//console.log(JSON.stringify(fakeObject));

module.exports = {
  Query: {
    getFakeAvailableVersions: () => fakeObject
  }

};
