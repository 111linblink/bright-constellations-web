"use client";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./page.module.css";
import "nes.css/css/nes.min.css";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const sendRoute = (type) => {
    router.push(`/${type}`);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#121d31" }}>
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

      {/* Video Section */}
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source
              src="https://assets.mixkit.co/videos/32910/32910-720.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className={styles.content}>
            <h1 className={styles.h1s}>The Brightest Constellations</h1>
          </div>
        </div>
      </div>

      <div className={styles.learnMoreSection}>
        <h2 className={styles.h2s}>Conoce más sobre Exoplanetas</h2>
        <p className={styles.paragraph}>
          Los exoplanetas son planetas que orbitan estrellas fuera de nuestro
          sistema solar. Cada uno de estos mundos es único y sorprendente, y
          algunos podrían incluso tener las condiciones necesarias para albergar
          vida. Descubre los distintos tipos de exoplanetas, desde gigantes
          gaseosos hasta mundos rocosos similares a la Tierra.
        </p>
        <button className={styles.learnMoreButton}>Más información</button>
      </div>

      <div>
        <h1 className={styles.h1s}>Exoplanet Catalog</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Cards Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Row 1 - Three Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {/* Card 1 */}
          <Card sx={{ maxWidth: 345, borderRadius: "5%" }}>
            <CardActionArea onClick={() => sendRoute("terrestrial")}>
              <CardMedia
                component="img"
                height="140"
                src="https://science.nasa.gov/wp-content/uploads/2023/11/terrestrial.jpg?w=1280&format=webp&crop=1"
                alt="Terrestrial"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Terrestrial
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  A type of exoplanet made of rock or metal, smaller than Earth,
                  possibly with oceans or atmospheres (artists concept).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Card 2 */}
          <Card sx={{ maxWidth: 345, borderRadius: "5%" }}>
            <CardActionArea onClick={() => sendRoute("super-earth")}>
              <CardMedia
                component="img"
                height="140"
                image="https://science.nasa.gov/wp-content/uploads/2023/11/neptunelike.jpg?w=1280&format=webp&crop=1"
                alt="Super Earth"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Super Earth
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Super-Earth exoplanets are also rocky, but between Earth and
                  Neptune in size (artists concept).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Card 3 */}
          <Card sx={{ maxWidth: 345, borderRadius: "5%" }}>
            <CardActionArea onClick={() => sendRoute("neptune-like")}>
              <CardMedia
                component="img"
                height="140"
                src="https://science.nasa.gov/wp-content/uploads/2023/11/gasgiant.jpg?w=1280&format=webp&crop=1"
                alt="Neptune-like"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Neptune-like
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  This variety of exoplanet is similar in size to Uranus and
                  Neptune, with an atmosphere of mostly hydrogen or helium
                  (artists concept).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        {/* Row 2 - Two Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          {/* Card 4 */}
          <Card sx={{ maxWidth: 345, borderRadius: "5%" }}>
            <CardActionArea onClick={() => sendRoute("gas-giant")}>
              <CardMedia
                component="img"
                height="140"
                src="https://science.nasa.gov/wp-content/uploads/2023/11/gasgiant.jpg?w=1280&format=webp&crop=1"
                alt="Gas Giant"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Gas Giant
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  This variety of exoplanet is similar in size to Uranus and
                  Neptune, with an atmosphere of mostly hydrogen or helium
                  (artists concept).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Card 5 */}
          <Card sx={{ maxWidth: 345, borderRadius: "5%" }}>
            <CardActionArea onClick={() => sendRoute("unknown")}>
              <CardMedia
                component="img"
                height="140"
                src="https://science.nasa.gov/wp-content/uploads/2023/11/unknown.jpg?w=1280&format=webp&crop=1"
                alt="Unknown"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Unknown
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  This variety of exoplanet is similar in size to Uranus and
                  Neptune, with an atmosphere of mostly hydrogen or helium
                  (artists concept).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>
    </div>
  );
}
