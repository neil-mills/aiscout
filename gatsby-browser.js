import React from 'react'
import { Layout } from './src/components/Layout'
import { SiteContextProvider } from './src/context/SiteContext'

export const wrapRootElement = ({ element }) => {
  return <SiteContextProvider>{element}</SiteContextProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
