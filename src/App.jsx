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
import About from "./pages/About.jsx";
import Admin from "./pages/Admin.jsx";
import Notfound from "./pages/Notfound.jsx";
import axios from "axios";
import { BACKEND_URL } from "./constants/backEnd.js";

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      async function chechkadmin(currentUser) {
        setUser(currentUser);
        try {
          const resp = await axios.get(`${BACKEND_URL}/admin`, {
            headers: { "x-user-id": currentUser.uid },
          });
          if (resp.status === 200) setAdmin(true);
          else setAdmin(false);
        } catch (error) {
          setAdmin(false);
        }
      }
      
      chechkadmin(currentUser);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      if (admin) {
        try {
          const response = await axios.get(`${BACKEND_URL}/admin/uzenetek`, {
            headers: { "x-user-id": user.uid },
          });
          const unreadCount = response.data.data.filter(
            (msg) => !msg.isAnswered
          ).length;
          setUnreadMessages(unreadCount);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    getMessages();
  }, [user, admin]);

  async function logout() {
    setUnreadMessages(0);
    await signOut(auth);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} admin={admin} logout={logout} unreadMessages={unreadMessages} />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/login",
          element: (
            <Login
              auth={auth}
              setUser={setUser}
              user={user}
              logout={logout}
            />
          ),
        },
        { path: "/openticket", element: <OpenTicket user={user} admin={admin} /> },
        {
          path: "/profile",
          element: (
            <Profile
              user={user}
              auth={auth}
              logout={logout}
              setUser={setUser}
              admin={admin}
            />
          ),
        },
        { path: "/forgotpassword", element: <ResetPassword auth={auth} /> },
        { path: "/about", element: <About /> },
        { path: "/admin", element: <Admin admin={admin} user={user} /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
