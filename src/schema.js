const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getAvailableVersions(currentVersion: String): [AvailableVersion]
    getFakeAvailableVersions: AvailableVersion
  }

  type AvailableVersion{
    version: String
    versionInfo: VersionInfo
  }

  type VersionInfo{
    minVersion: String
    hash: String
    fixedBugs: FixedBugs
    newFeatures: NewFeatures
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
