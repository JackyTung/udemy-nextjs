import { Fragment } from 'react'

import MainHeader from './MainHeader'

const Layout = ({ children }) => (
  <Fragment>
    <MainHeader />
    <main>{children}</main>
  </Fragment>
)

export default Layout
