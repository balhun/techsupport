import { useEffect, useState } from "react";
import {
  Button,
  styled,
  Divider,
  Alert,
  List,
  Typography,
  Box,
  Paper,
  Avatar,
  ListItem,
  ListItemText,
} from "@mui/material";
import { updateProfile, updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { Link, Navigate } from "react-router-dom";
import { uploadFile } from "../Uploadfile";
import { CloudUpload } from "@mui/icons-material";
import axios from "axios";
import { BACKEND_URL } from "../constants/backEnd";
import { EmailAuthProvider } from "firebase/auth/web-extension";

export default function Profile({ user, auth, logout, setUser, admin }) {
  const [profilePicture, setProfilePicture] = useState(
    user?.photoURL || "./blank-pfp.png"
  );

  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [singleMessages, setSingleMessages] = useState([]);
  const [id, setId] = useState("");
  const [datum, setDatum] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/uzenetek`, {
          headers: { "x-user-id": user.uid },
        });
        setMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    getMessages();
  }, [user]);

  useEffect(() => {
    const getSingleMessage = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/uzenetek/${id}`, {
          headers: { "x-user-id": user.uid },
        });
        setSingleMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (id) {
      getSingleMessage();
    }
  }, [id, user]);

  const ProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.size < 5242880) {
      try {
        setUploading(true);
        const cloudinaryResponse = await uploadFile(file);
        if (cloudinaryResponse && cloudinaryResponse.url) {
          const cloudinaryURL = cloudinaryResponse.url;
          await updateProfile(auth.currentUser, { photoURL: cloudinaryURL });

          setProfilePicture(cloudinaryURL);
          setUser((v) => ({ ...v, photoURL: cloudinaryURL }));

          alert("Profile picture updated successfully!");
        } else {
          throw new Error("Failed to get Cloudinary URL.");
        }
      } catch (error) {
        console.error("Error updating profile picture:", error);
        alert("Failed to update profile picture. Please try again.");
      } finally {
        setUploading(false);
      }
    } else {
      alert("Túl nagy a fájl (5mb max)");
    }
};

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('hu-HU', options);
  };

  async function fioktorles() {
    if (confirm("Biztos törölni szeretnéd a fiókod?") == true) {
      await user.delete();
      console.log("deleted user");
      logout();
    }
  }

  const SaveChanges = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      
      if (newPassword) {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);

        reauthenticateWithCredential(user, credential)
          .then(() => {
            return updatePassword(user, newPassword);
          })
          .then(() => {
            alert("Profilod sikeresen frissítve!");
          })
          .catch((error) => {
            console.error("Error updating password:", error);
            alert("Valamilyen hiba történt a jelszavad frissítése közben.");
          });
        logout();
      } else alert("Profilod sikeresen frissítve!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Valamilyen hiba történt a profilod frissítése közben.");
    }
    setUser((v) => ({ ...v, displayName: name }));
  };

  return (
    <>
      {user ? (
        <div
          className="flex 2xl:m-4 m-4 gap-4 flex-col 2xl:flex-row"
        >
          <div className="bg-white rounded-2xl glowing profileBox min-w-fit">
            <div className="p-5 text-2xl">
              <h1>Személyes adataid</h1>
            </div>
            <Divider />
            <div className="space-y-4 p-5">
              <div className="flex items-center space-x-4">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profilkép csere
                  </label>

                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUpload />}
                    sx={{ "textTransform": "none" }}
                  >
                    Fájl feltöltése
                    <VisuallyHiddenInput
                      type="file" 
                      accept=".png, .jpg, .gif"
                      onChange={ProfilePictureChange}
                      disabled={uploading}
                      multiple={false}
                    />
                  </Button>
                  {uploading && (
                    <p className="text-sm text-blue-500">Feltőltés...</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Név
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Felhasználónév"
                  className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full mt-1 p-2 border rounded-lg shadow-sm bg-gray-200 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Jelszó csere
                </label>

                <input
                  type="password"
                  placeholder="Jelenlegi jelszó"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Új jelszó"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-row justify-between">
                <Button
                  sx={{ "textTransform": "none" }}
                  className={admin ? "w-full py-2 rounded-lg hover:bg-blue-600 hover:text-white" : "w-3/4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"}
                  onClick={SaveChanges}
                >
                  Változtatások Mentése
                </Button>
                {admin ? "" :
                <Button
                  sx={{ "textTransform": "none" }}
                  className="hover:bg-red-600 bg-red-500 hover:text-white"
                  onClick={fioktorles}
                >
                  Fiók törlése
                </Button>
                }
              </div>
              
            </div>
          </div>
          <div className="rounded-2xl glowing bg-white flex-grow profileBox relative h-[600px]">
            {!admin ? (
              <div className="h-full flex flex-col">
                <div className="p-5 text-2xl">Nyitott és lezárt ügyeid</div>
                <Divider />
                
                <div className="flex flex-1 overflow-hidden">
                  <div className="min-w-52 border-r overflow-y-auto">
                      <List>
                        {messages.map((message) => (
                          <ListItem
                            key={message.id}
                            onClick={() => {setId(message.id); setDatum(message.created_at)}}
                            selected={singleMessages?.id === message.id}
                            sx={{
                              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                              cursor: 'pointer'
                            }}
                          >
                            <ListItemText
                              primary={message.cim}
                              secondary={formatDate(message.created_at)}
                              secondaryTypographyProps={{ color: "textSecondary" }}
                            />
                          </ListItem>
                        ))}
                      </List>
                  </div>
                
                  <div className="p-4 overflow-y-auto">
                    {id != "" ? (
                      <div>
                        <Typography variant="h5" gutterBottom>
                          {singleMessages.cim}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                          Beküldve: {formatDate(datum)}
                        </Typography>
                        
                        <Box mt={3} mb={4}>
                          <Paper elevation={0} sx={{ p: 2, bgcolor: 'primary.light', ml: 'auto' }}>
                            <Box display="flex" alignItems="flex-start" gap={1}>
                              <Box>
                                <Typography variant="body1">
                                  {singleMessages.uzenet}
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                              >
                                <Avatar src={profilePicture} sx={{ width: 32, height: 32 }} />
                                <Typography variant="subtitle2" fontWeight="medium">
                                  {user.displayName}
                                </Typography>
                              </Box>
                            </Box>
                          </Paper>
                        </Box>
                        
                        {singleMessages.isAnswered ? (
                          <Box mt={4}>
                            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                              <Box display="flex" alignItems="flex-start" gap={1}>
                                <Avatar sx={{ width: 32, height: 32, bgcolor: 'grey.500' }}>Ü</Avatar>
                                <Box>
                                  <Typography variant="subtitle2" fontWeight="medium">
                                    Ügyfélszolgálat
                                  </Typography>
                                  <Typography variant="body1">
                                    {singleMessages.valasz}
                                  </Typography>
                                </Box>
                              </Box>
                            </Paper>
                          </Box>
                        ) : (
                          <Alert severity="info" sx={{ mt: 2 }}>
                            Ezt az ügyet még nem válaszolták meg!
                          </Alert>
                        )}
                      </div>
                    ) : (
                      <Box display="flex" height="100%" alignItems="center" justifyContent="center">
                        <Typography variant="body1" color="textSecondary">
                          Válassz egy üzenetet a bal oldali listából
                        </Typography>
                      </Box>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Box display="flex" height="100%" alignItems="center" justifyContent="center">
                <Link to="/admin">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      textTransform: 'none',
                      fontSize: 16,
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    A Jegyek Menedzseléséhez kattints ide!
                  </Button>
                </Link>
              </Box>
            )}
          </div>
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
}
