import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TeamList from '../components/Team/TeamList'

const team = () => {
  return (
    <Layout>
      <Hero> hi from hero</Hero>
      <TeamList />
    </Layout>
  )
}

export default team
