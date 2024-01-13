import { gql } from "@apollo/client";


const SEND_COMMENTS = gql`
mutation sendComment($name: String!, $email: String!, $comment: String!, $urlSlug: String!) {
  createComment(
    data: { email: $email, comment: $comment, name: $name, article: { connect: { urlSlug: $urlSlug } } }
  ) {
    id
  }
}`

export { SEND_COMMENTS }