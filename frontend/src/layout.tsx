import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './headers'

function Layout() {
    return (
        <>
            <Headers />
            <Outlet />
        </>
    )
}

export default Layout