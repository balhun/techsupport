import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from "./pages/Menu.jsx";


export default function Layout() {
  return (
    <div>
        <div>
            <Menu />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}
