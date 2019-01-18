const objTest = require('./fake-objects');

console.log(JSON.stringify(objTest.FakeAvailableVersionList));

module.exports = {
  Query: {
    getFakeAvailableVersions: () => objTest.FakeAvailableVersionList
  }

};
