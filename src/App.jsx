import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "/firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import MyTickets from "./pages/MyTickets.jsx";
import Login from "./pages/Login.jsx";
import OpenTicket from "./pages/OpenTicket.jsx";
import Profile from "./pages/Profile.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
      setUser(currentUser);
    });
    return() => unsubscribe;
  }, []);

  async function logout() {
      await signOut(auth)
  }

  const router = createBrowserRouter([
    { path: "/", element: <Layout user={user} logout={logout} />, children: [
      { path: "/", element: <Home /> },
      { path: "/mytickets", element: <MyTickets /> },
      { path: "/login", element: <Login auth={auth} setUser={setUser} user={user} /> },
      { path: "/openticket", element: <OpenTicket /> },
      { path: "/profile", element: <Profile user={user} /> },
      { path:"/forgotpassword", element: <ResetPassword auth={auth}/>}
    ]}
  ]);
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
