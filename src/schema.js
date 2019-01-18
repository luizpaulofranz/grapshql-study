const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getAvailableVersions(currentVersion: String): AvailableVersionList
    getFakeAvailableVersions: AvailableVersionList
  }

  type AvailableVersionList{
    availableVersionList: [AvailableVersion]
  }

  type AvailableVersion{
    version: String
    versionInfo: VersionInfo
  }

  type VersionInfo{
    minVersion: String
    hash: String
    fixedBugs: [FixedBugs]
    newFeatures: [NewFeatures]
  }

  type FixedBugs{
    id: Int
    description: String
  }

  type NewFeatures{
    id: Int
    description: String
  }

`;

module.exports = typeDefs;
