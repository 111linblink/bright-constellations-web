import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./page.module.css";

import "nes.css/css/nes.min.css";

export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "black" }}>
          <IconButton
            size="large"
            edge="start"
            color="grey"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bright Constellations
          </Typography>
          <Button color="inherit">Menú</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
