import React from 'react'
import Header from '@Components/Common/Header/Index'
import Footer from '@Components/Common/Footer/Index'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>


    )
}
