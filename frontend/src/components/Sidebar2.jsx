// src/components/Sidebar.js
import React, { useState } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Sidebar2 = () => {
  return (
    <div className=" w-56 bg-pure-greys-5 h-screen hidden md:flex">
      <Box anchor="left">
        <div className=" w-56 py-10 sm:py-20 flex flex-col justify-center items-center">
          <h1 className=" my-4 text-lg py-2 px-4 w-44 flex justify-center bg-pure-greys-50 text-black rounded-xl cursor-pointer">
            <Link to={"/books"}>Home</Link>
          </h1>
          <h1 className=" my-4 text-lg py-2 px-4 w-44 flex justify-center bg-pure-greys-50 text-black rounded-xl cursor-pointer">
            Trendings
          </h1>
          <h1 className=" my-4 text-lg py-2 px-4 w-44 flex justify-center bg-pure-greys-50 text-black rounded-xl cursor-pointer">
            Recommended
          </h1>
          <h1 className=" my-4 text-lg py-2 px-4 w-44 flex justify-center bg-pure-greys-50 text-black rounded-xl cursor-pointer">
            My Books
          </h1>
        </div>
      </Box>
    </div>
  );
};

export default Sidebar2;
