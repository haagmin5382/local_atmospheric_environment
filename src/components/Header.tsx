import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent" enableColorOnDark>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            South Korea Fine Dust Map
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
