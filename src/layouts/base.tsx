import * as React from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from './GlobalStyle'

interface BaseProps {
  children: JSX.Element
}

export const Base = ({ children }: BaseProps) => {
  return (
    <>
      <BaseHelmet />
      <GlobalStyle />
      {children}
    </>
  )
}

const BaseHelmet = () => (
  <Helmet>
    <meta charSet="utf-8" name="format-detection" content="telephone=no" />
    <title>Charlottebrf.dev</title>
    <link rel="icon" type="image/png" sizes="32x32" href="https://themes.gohugo.io//theme/hallo-hugo/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://themes.gohugo.io//theme/hallo-hugo/favicon-16x16.png" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/regular.css"
      integrity="sha384-FKw7x8fCxuvzBwOJmhTJJsKzBl8dnN9e2R4+pXRfYoHivikuHkzWyhKWDSMcGNK8"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/brands.css"
      integrity="sha384-n9+6/aSqa9lBidZMRCQHTHKJscPq6NW4pCQBiMmHdUCvPN8ZOg2zJJTkC7WIezWv"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css"
      integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq"
      crossOrigin="anonymous"
    />
  </Helmet>
)
