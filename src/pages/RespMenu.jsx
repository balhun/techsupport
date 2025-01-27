/*import React from 'react'
import { Button, ButtonGroup, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export default function Menu({ user, logout }) {
  const { pathname } = useLocation();

  return (
    <Stack direction='row' className='flex flex-row  md:flex-col bg-gray-900 text-white justify-between p-2 rounded-b-xl z-10 shadow-xl hover:shadow-2xl transition-shadow bg-opacity-75'>
        <Stack direction='row' gap={1} >
          <ButtonGroup variant='outlined'>
            <Link to="/"><Button variant={pathname == "/" ? "outlined" : "contained"}>Home</Button></Link>
            <Link to="/openticket"><Button variant={pathname == "/openticket" ? "outlined" : "contained"}>Open a Ticket</Button></Link>
          </ButtonGroup>
        </Stack>
        <h1 className='text-3xl'>Welcome to Technical Support™</h1>
        <Stack direction='row' gap={2} alignItems='center'>
          { user ? 
            <Link to="/profile"><Stack direction='row' gap={1} className="p-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition-colors" >
                <span className='flex items-center'>{user.displayName}</span>
                <img src={user.photoURL} className='w-8 h-8' />
            </Stack></Link>
            :
            ""
          }
          { user ?
            <Link to="/"><Button variant="outlined" onClick={logout}>Log out</Button></Link>
            :
            <Link to="/login"><Button variant={pathname == "/login" ? "outlined" : "contained"}>Log in</Button></Link>
          }
            
        </Stack>
    </Stack>
  )
}*/
import React, { useState } from 'react';
import { Button, ButtonGroup, Stack, Menu, MenuItem, useMediaQuery, useTheme, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SupportIcon from '@mui/icons-material/Support';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function RespMenu({ user, setUser, logout }) {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); 
    setUser(null);
  };

  return (
    <Stack
      direction="row"
      className="flex flex-row md:flex-col bg-gray-900 text-white justify-between items-center p-2 rounded-b-xl z-10 shadow-xl hover:shadow-2xl transition-shadow bg-opacity-75"
    >
      {isSmallScreen ? (
        <>
          <Button
            onClick={handleClick}
            variant="contained"
            className="w-auto"
            color="primary"
          >
            Menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            PaperProps={{
              sx: {
                backgroundColor: '#1f1f1f',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Link to="/" className="text-white">
              <MenuItem
                onClick={handleClose}
                selected={pathname === '/'}
                className="hover:bg-gray-700"
              >
                <HomeIcon className="mr-2" /> Home
              </MenuItem>
            </Link>
            <Link to="/openticket" className="text-white">
              <MenuItem
                onClick={handleClose}
                selected={pathname === '/openticket'}
                className="hover:bg-gray-700"
              >
                <SupportIcon className="mr-2" /> Open a Ticket
              </MenuItem>
            </Link>
            <Divider sx={{ my: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            {user ? (
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
                className="hover:bg-gray-700"
              >
                <LogoutIcon className="mr-2" /> Log out
              </MenuItem>
            ) : (
              <Link to="/login" className="text-white">
                <MenuItem
                  onClick={handleClose}
                  selected={pathname === '/login'}
                  className="hover:bg-gray-700"
                >
                  <LoginIcon className="mr-2" /> Log in
                </MenuItem>
              </Link>
            )}
          </Menu>
        </>
      ) : (
        <Stack direction="row" gap={1}>
          <ButtonGroup variant="outlined">
            <Link to="/">
              <Button variant={pathname === '/' ? 'outlined' : 'contained'}>
                Home
              </Button>
            </Link>
            <Link to="/openticket">
              <Button
                variant={pathname === '/openticket' ? 'outlined' : 'contained'}
              >
                Open a Ticket
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      )}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        sx={{ textAlign: 'center' }}
      >
        <h1
          className={`text-3xl md:text-4xl ${
            isSmallScreen ? 'text-xl' : ''
          }`}
        >
          Welcome to Technical Support™
        </h1>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        {user ? (
          <Link to="/profile">
            <Stack
              direction="row"
              gap={1}
              className="p-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition-colors items-center"
            >
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              {!isSmallScreen && (
                <span className="flex items-center">{user.displayName}</span>
              )}
            </Stack>
          </Link>
        ) : (
          ''
        )}

        {user ? (
          !isSmallScreen && (
            <Link to="/">
              <Button variant="outlined" onClick={handleLogout}>
                Log out
              </Button>
            </Link>
          )
        ) : (
          !isSmallScreen && (
            <Link to="/login">
              <Button
                variant={pathname === '/login' ? 'outlined' : 'contained'}
              >
                Log in
              </Button>
            </Link>
          )
        )}
      </Stack>
    </Stack>
  );
}
