import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query {
  articles {
    title
    urlSlug
    id
    author {
      name
      avatar {
        url
      }
    }
    picsOrMedia {
      url
    }
  }
}
`

const GET_AUTHORS_INFO = gql`
query {
  authors {
    name
    id
    slug
    avatar {
      url
    }
  }
}
`

const GET_AUTHOR_INFO = gql`
query getAuthorInfo($slug: String!) {
  author(where: {slug: $slug}) {
    name
    id
    avatar {
      url
    }
    workField
    description {
      html
    }
    authorArticles {
      ... on Article {
        id
        title
        picsOrMedia {
          url
        }
        urlSlug
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  }
}`

const GET_ARTICLE_INFO = gql`
query getArticleInfo($urlSlug: String!) {
    article(where: {urlSlug: $urlSlug}) {
      author {
        avatar {
          url
        }
        name
        workField
      }
      id
      title
      urlSlug
      picsOrMedia {
        url
      }
      articleText {
      html
    }
    }
  }`

  const GET_COMMENTS = gql `
  query getComments($urlSlug: String!) {
  comments(where: {article: {urlSlug: $urlSlug}}) {
    comment
    id
    name
    createdAt
  }
}`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO,GET_ARTICLE_INFO, GET_COMMENTS };