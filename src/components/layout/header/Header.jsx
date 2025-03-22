import React, { useState } from "react";
import scss from "./Header.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AdminPanel from "../../../admin/AdminPanel";
import {
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AppleAuthContext";

const Header = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logOut();
    handleCloseUserMenu();
    navigate("/");
  };

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleMenuItemClick = (setting) => {
    if (setting === "Logout") {
      handleLogout();
    } else if (setting === "Profile") {
      navigate("/profile");
      handleCloseUserMenu();
    } else if (setting === "Account") {
      navigate("/account");
      handleCloseUserMenu();
    } else if (setting === "Dashboard") {
      navigate("/dashboard");
      handleCloseUserMenu();
    }
  };

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          {user && user.email === "talgattulobaev519@gmail.com" && (
            <AdminPanel />
          )}
          <Tooltip onClick={() => navigate("/login")}>
            <AppleIcon />
          </Tooltip>
          <p onClick={() => navigate("/store")}>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>Vision</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>Entertainment</p>
          <p>Accessories</p>
          <p>Support</p>

          <Tooltip title="Search">
            <SearchIcon />
          </Tooltip>

          <Tooltip title="Basket">
            <ShoppingBagIcon />
          </Tooltip>

          {user ? (
            <div>
              <Tooltip title={user.displayName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: "25px", height: "25px", borderRadius: "50%" }}
                    alt={user.displayName}
                    src={user.photoURL}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "25px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleMenuItemClick(setting)}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
