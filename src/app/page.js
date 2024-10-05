import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./page.module.css";

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
      <section></section>

      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source
              src="https://svs.gsfc.nasa.gov/vis/a000000/a003400/a003442/TychoTour_HD720.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className={styles.content}>
            <h1>Bienvenido a mi página</h1>
            <p>Texto sobre el video de fondo</p>
          </div>
        </div>
      </div>

      <div>
        <h1>Bienvenido a mi página</h1>
        <p>Texto sobre el video de fondo</p>
      </div>

      <div>
        <h1>Bienvenido a mi página</h1>
        <p>Texto sobre el video de fondo</p>
      </div>

      <div>
        <h1>Bienvenido a mi página</h1>
        <p>Texto sobre el video de fondo</p>
      </div>
    </div>
  );
}
