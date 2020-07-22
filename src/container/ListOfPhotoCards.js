import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCardsWithQuery = (props) => (
  <Query query={query}>
    {
      (data) => {
        if (data.loading) return null
        const photos = data.data
        return <ListOfPhotoCardsComponent {...photos} />
      }
    }
  </Query>
)
