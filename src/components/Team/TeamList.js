import React from 'react'
import Image from 'gatsby-image'
import { Title } from '../../utils/Title'

import styles from './teamlist.module.css'
import Member from './Member'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const GET_MEMBERS = graphql`
  query {
    members: allContentfulMember(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          name
          title
          about
          photo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default function TeamList() {
  return (
    <div>
      <Title title="Meet the team" />
      <div className={styles.list}>
        <StaticQuery
          query={GET_MEMBERS}
          render={data => {
            const person = data.members.edges
            return person.map(member => {
              return <Member key={member.node.id} member={member.node} />
            })
          }}
        />
      </div>
    </div>
  )
}
