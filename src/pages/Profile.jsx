import React, { useState } from 'react';
import { Card, CardContent, CardHeader,Button, styled } from '@mui/material';
import { updateProfile, updatePassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { uploadFile } from '../Uploadfile';
import { CloudUpload } from '@mui/icons-material';


export default function Profile({ user,auth,logout,setUser }) {
  const [profilePicture, setProfilePicture] = useState(user?.photoURL||'./blank-pfp.png');
  const [uploading, setUploading] = useState(false);
  const [name, setName] = useState(user?.displayName||'');
  const [email, setEmail] = useState(user?.email||'');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const ProfilePictureChange = async (event) => {
    const file = event.target.files[0]; 
    if (file && file.size<5242880) {
      try {
        setUploading(true);
        const cloudinaryResponse = await uploadFile(file);
          if (cloudinaryResponse && cloudinaryResponse.url) {
            const cloudinaryURL = cloudinaryResponse.url;
            await updateProfile(auth.currentUser, { photoURL: cloudinaryURL });
  
            setProfilePicture(cloudinaryURL);
            setUser((v)=>({...v,photoURL:cloudinaryURL}))
    
            alert('Profile picture updated successfully!');
          } else {
            throw new Error('Failed to get Cloudinary URL.');
          }
      } catch (error) {
        console.error('Error updating profile picture:', error);
        alert('Failed to update profile picture. Please try again.');
      } finally {
        setUploading(false);
      }
    }else{
      alert("Túl nagy a fájl (5mb max)")
    }
  };
  
  const SaveChanges = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      alert('Profile updated successfully!');

      if (newPassword) {
        await updatePassword(auth.currentUser, newPassword);
        alert('Password updated successfully!');
        logout()
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
    setUser((v)=>({...v,displayName:name}))
  };

  return (
    <>
    {user ?

    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div >
      <Card className="rounded-2xl shadow-lg glowing">
          <CardHeader
            title="Személyes adataid"
            className="text-lg font-semibold text-gray-800 border-b"
          />
          <CardContent>
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-16 h-16 rounded-full border border-gray-300"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Profilkép csere</label>
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUpload />}
                      
                    >
                      Upload files
                      <VisuallyHiddenInput
                        type="file"
                        accept='.png, .jpg, .gif'
                        onChange={ProfilePictureChange}
                        disabled={uploading}
                        multiple
                      />
                    </Button>
                    {uploading && <p className="text-sm text-blue-500">Feltőltés...</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Név</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Felhasználónév"
                    className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    disabled
                    className="w-full mt-1 p-2 border rounded-lg shadow-sm bg-gray-200 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Jelszó csere</label>
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

                <Button
                  className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                  onClick={SaveChanges}
                >
                Változtatások Mentés
                </Button>
              </div>
            ) : (
              <p className="text-gray-500">Kérjük, jelentkezzen be profilja megtekintéséhez és szerkesztéséhez.</p>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="w-full max-w-md md:max-w-lg space-y-6">
        <Card className="rounded-2xl shadow-lg mt-6 glowing">
          <CardHeader
            title="Nyitott és lezárt ügyeid"
            className="text-lg font-semibold text-gray-800 border-b"
          />
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-200 p-3 rounded-lg">
                <p className="text-gray-700">This is where messages will appear.</p>
                <Button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                  View Messages
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    :<Navigate to="/login" replace/>}
    </>
  );
};
