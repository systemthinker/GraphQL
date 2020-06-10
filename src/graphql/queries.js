import gql from 'graphql-tag';

export const GET_LIVE_MATCHES = gql`
subscription LiveMatches {
  matches(order_by: {finished: asc}) {
    id
    started_at
    p2 {
      name
    }
    p1 {
      name
    }
    setts {
      p1_score
      p2_score
    }
    finished
  }
}

`;



