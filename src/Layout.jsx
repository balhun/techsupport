import React from 'react'
import { Outlet } from 'react-router-dom'
import RespMenu from "./pages/RespMenu.jsx";
import RespFooter from './pages/RespFooter.jsx';


export default function Layout({ user,admin, logout }) {
  return (
    <div className="flex flex-col min-h-screen">
        <div>
            <RespMenu user={user}admin={admin} logout={logout} />
        </div>
        <div className='flex-grow'>
            <Outlet />
        </div>
        <div>
            <RespFooter/>
        </div>
    </div>
  )
}
