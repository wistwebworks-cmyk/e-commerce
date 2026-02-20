import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
