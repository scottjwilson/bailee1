import React from 'react'
import { AppProvider } from './src/context'

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
