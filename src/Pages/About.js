import React from "react";
import Sidebar from "../Components/Header/Components/Sidebar";
import Box from "@mui/material/Box";

function About() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </div>
  );
}
export default About;
