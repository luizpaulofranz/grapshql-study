const fakeAvailableVersionList = require('../fake-data/available-version-list');

//console.log(JSON.stringify(fakeObject));

module.exports = {
  Query: {
    getFakeAvailableVersions: () => fakeAvailableVersionList
  }

};
