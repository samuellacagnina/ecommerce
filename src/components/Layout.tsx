import React from 'react'
import Header from './Header/Header'
import ProfileBox from "./Header/Profile/ProfileBox"

const Layout = ({children}:any) => {
  return (

    <div>
        <Header />
        <main>{children}</main>
    </div>
  )
}

export default Layout