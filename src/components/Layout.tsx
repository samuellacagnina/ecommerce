import React from "react"
import Header from "./Header/Header"
import { Footer } from "./Footer/Footer"


const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
