import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import MyTickets from "./pages/MyTickets.jsx";
import Login from "./pages/Login.jsx";
import OpenTicket from "./pages/OpenTicket.jsx";
import Profile from "./pages/Profile.jsx";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "/mytickets", element: <MyTickets /> },
      { path: "/login", element: <Login /> },
      { path: "/openticket", element: <OpenTicket /> },
      { path: "/profile", element: <Profile /> }
    ]}
  ]);
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
