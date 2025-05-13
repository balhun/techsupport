import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Stack,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider,
  Badge,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SupportIcon from "@mui/icons-material/Support";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { BACKEND_URL } from "../constants/backEnd";

export default function RespMenu({ user, admin, logout }) {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [unreadMessages, setUnreadMessages] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fetch messages and calculate unread count
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

  return (
    <Stack
      direction="row"
      className="pb-5 flex flex-row md:flex-col bg-gray-900 text-white justify-between items-center p-2 rounded-b-xl z-10 shadow-xl hover:shadow-2xl transition-shadow bg-opacity-75 relative menubar"
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
                backgroundColor: "#1f1f1f",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Link to="/" className="text-white">
              <MenuItem
                onClick={handleClose}
                selected={pathname === "/"}
                className="hover:bg-gray-700"
              >
                <HomeIcon className="mr-2" />
                Főoldal
              </MenuItem>
            </Link>

            <Link to={!admin ? "/openticket" : "/admin"} className="text-white">
              <MenuItem
                onClick={handleClose}
                selected={pathname === `/${!admin ? "openticket" : "admin"}`}
                className="hover:bg-gray-700"
              >
                <Badge
                  badgeContent={unreadMessages > 0 ? unreadMessages : null}
                  color="error"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                ></Badge>
                {!admin ? "Ügyfélszolgálat" : "Admin"}
              </MenuItem>
            </Link>
            <Divider
              sx={{ my: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            />
            {user ? (
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
                className="hover:bg-gray-700"
              >
                <LogoutIcon className="mr-2" />
                Kijelentkezés
              </MenuItem>
            ) : (
              <Link to="/login" className="text-white">
                <MenuItem
                  onClick={handleClose}
                  selected={pathname === "/login"}
                  className="hover:bg-gray-700"
                >
                  <LoginIcon className="mr-2" />
                  Bejelentkezés
                </MenuItem>
              </Link>
            )}
          </Menu>
        </>
      ) : (
        <Stack direction="row" gap={1}>
          <ButtonGroup variant="outlined">
            <Link to="/">
              <Button variant={pathname === "/" ? "outlined" : "contained"}>
                Főoldal
              </Button>
            </Link>
            <Link to={!admin ? "/openticket" : "/admin"}>
              <Badge
                badgeContent={unreadMessages > 0 ? unreadMessages : null}
                color="error"
                overlap="circular"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Button
                  variant={
                    pathname === `/${!admin ? "openticket" : "admin"}`
                      ? "outlined"
                      : "contained"
                  }
                >
                  {!admin ? "Ügyfélszolgálat" : "Admin"}
                </Button>
              </Badge>
            </Link>
          </ButtonGroup>
        </Stack>
      )}
      <Link
        to="/"
        className="pb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl h-max w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      >
        Technikai támogatás
      </Link>
      <Stack direction="row" gap={2} alignItems="center">
        {user ? (
          <Link to="/profile">
            <Stack
              direction="row"
              gap={1}
              className="p-2 rounded-md hover:bg-gray-800 bg-gray-900 bg-opacity-50 hover:cursor-pointer transition-all duration-600 items-center"
            >
              <img
                src={user.photoURL != null ? user.photoURL : "./blank-pfp.png"}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              {!isLargeScreen ? (
                <span className="flex items-center">{user.displayName}</span>
              ) : (
                ""
              )}
            </Stack>
          </Link>
        ) : (
          ""
        )}
        {user
          ? !isSmallScreen && (
              <Link to="/">
                <Button variant="outlined" onClick={logout}>
                  Kijelentkezés
                </Button>
              </Link>
            )
          : !isSmallScreen && (
              <Link to="/login">
                <Button
                  variant={pathname === "/login" ? "outlined" : "contained"}
                >
                  Bejelentkezés
                </Button>
              </Link>
            )}
      </Stack>
    </Stack>
  );
}
