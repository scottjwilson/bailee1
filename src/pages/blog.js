import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import style from './blog.module.css'
import { styles, Section, Banner, PageHeader, Title } from '../utils'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styled from 'styled-components'
import tw from 'tailwind.macro'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <PageHeader>
            <Banner title="Blog" />
          </PageHeader>

          <BlogWrapper>
            <Title title="Recent articles" />
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <Post key={node.slug}>
                    <ArticlePreview article={node} />
                  </Post>
                )
              })}
            </ul>
          </BlogWrapper>
        </div>
      </Layout>
    )
  }
}

const BlogWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {

    line-height: 2rem;
    color: ${styles.colors.mainGrey}
    word-spacing: 0.2rem;
  }


  @media (min-width: 768px) {
    width: 70%;
}

@media (min-width: 992px) {
    width: 70%;
}
`

const Post = styled.li`

  ${tw`flex p-4 m-4 md:m-6 shadow-md rounded`};
  background: ${styles.gradients.dualityOne};
  color:black;

  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  }
`

const PostImage = styled.div`
  flex: 25%;
  margin: 1rem;
  ${tw`shadow-md`};
`

const PostText = styled.div`
  flex: 75%;
`

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
