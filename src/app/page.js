import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./page.module.css";

import "nes.css/css/nes.min.css";

export default function Home() {
  return (
    <div>
      <a class="nes-btn" href="#">
        Normal
      </a>

      <button type="button" class="nes-btn is-primary">
        Primary
      </button>
      <button type="button" class="nes-btn is-success">
        Success
      </button>
      <button type="button" class="nes-btn is-warning">
        Warning
      </button>
      <button type="button" class="nes-btn is-error">
        Error
      </button>
      <button type="button" class="nes-btn is-disabled">
        Disabled
      </button>

      <label class="nes-btn">
        <span>Select your file</span>
      </label>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
