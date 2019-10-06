import React from 'react'
import AppProvider from './src/context/context'

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
