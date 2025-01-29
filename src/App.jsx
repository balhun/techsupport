import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "/firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import OpenTicket from "./pages/OpenTicket.jsx";
import Profile from "./pages/Profile.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import About from './pages/About.jsx';


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [successRegist, setSuccessRegist] = useState(false);

  useEffect(() => {
    setTimeout(setSuccessRegist(false), 5000);
  },[]);
  
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
    { path: "/", element: <Layout user={user} logout={logout}  />, children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login auth={auth} setUser={setUser} user={user} logout={logout} successRegist={successRegist} setSuccessRegist={setSuccessRegist} /> },
      { path: "/openticket", element: <OpenTicket /> },
      { path: "/profile", element: <Profile user={user} auth={auth} logout={logout} setUser={setUser} /> },
      { path: "/forgotpassword", element: <ResetPassword auth={auth}/>},
      { path: "/about" , element: <About/>}
    ]}
  ]);
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
