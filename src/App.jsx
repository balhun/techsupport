import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu"
import Login from "./Login.jsx"
import Ticket from "./Ticket.jsx"

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Menu />, children: [
      { path: "/ticket", element: <Ticket /> },
      { path: "/login", element: <Login /> }
    ]}
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
      <h1 className='text-white text-center text-2xl mt-5'>Hello World</h1>
    </div>
  )
}

export default App
