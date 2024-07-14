// src/components/Sidebar.js
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div>
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <div className=" w-56 py-10 sm:py-20">
          {["Home", "Trendings", "Recommended", "My Books"].map(
            (text, index) => (
              <ListItem key={index}>
                <h1 className=" text-lg py-2 px-4 w-44 flex justify-center bg-pure-greys-50 text-black rounded-xl cursor-pointer">
                  {text}
                </h1>
              </ListItem>
            )
          )}
        </div>
        <button
          onClick={handleLogout}
          className=" py-2 px-4 bg-red-100 text-white rounded-xl mx-4"
        >
          Logout
        </button>
      </Drawer>
    </div>
  );
};

export default Sidebar;
