import React from 'react'
import blogstyles from './blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link'

const BlogCard = ({ blog }) => {
  const { slug, title, heroImage, publishDate } = blog
  return (
    <article className={blogstyles.blog}>
      <div className={blogstyles.imgContainer}>
        <Image
          fluid={heroImage.fluid}
          className={blogstyles.img}
          alt="single post"
        />
        <AniLink fade className={blogstyles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={blogstyles.date}>{publishDate}</h6>
      </div>
      <div className={blogstyles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
