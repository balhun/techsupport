import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from "./pages/Menu.jsx";


export default function Layout({ user, logout }) {
  return (
    <div>
        <div>
            <Menu user={user} logout={logout} />
        </div>
        <div >
            <Outlet />
        </div>
    </div>
  )
}
