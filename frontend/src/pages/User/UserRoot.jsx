import React from 'react'
import Header from '../../layout/User/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/User/Footer/Footer'

const UserRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserRoot