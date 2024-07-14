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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
      </Drawer>
    </div>
  );
};

export default Sidebar;
