import React from 'react'
import { Outlet } from 'react-router-dom'
import RespMenu from "./pages/RespMenu.jsx";
import RespFooter from './pages/RespFooter.jsx';


export default function Layout({ user, logout }) {
  return (
    <div>
        <div>
            <RespMenu user={user} logout={logout} />
        </div>
        <div >
            <Outlet />
        </div>
        <div>
            <RespFooter/>
        </div>
    </div>
  )
}
