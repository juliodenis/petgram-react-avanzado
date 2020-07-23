import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { Loading } from '../components/Loading'

const GET_PHOTOS = gql`
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
  <Query query={GET_PHOTOS}>
    {
      (data) => {
        if (data.loading) return <Loading />
        if (data.error) return <p>❌ Error! {data.error}</p>
        const photos = data.data
        return <ListOfPhotoCardsComponent {...photos} />
      }
    }
  </Query>
)
