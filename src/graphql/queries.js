/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrack = /* GraphQL */ `
  query GetTrack($id: ID!) {
    getTrack(id: $id) {
      id
      name
      artistName
      genre
      imageSrc
      trackSrc
      likes
      streams
      downloads
      createdAt
      updatedAt
    }
  }
`
export const listTracks = /* GraphQL */ `
  query ListTracks(
    $filter: ModelTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        artistName
        genre
        imageSrc
        trackSrc
        likes
        streams
        downloads
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
