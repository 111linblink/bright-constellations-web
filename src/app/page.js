import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
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

      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

      {/* Cards Section */}
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {/* Tarjeta 1 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Terrestrial
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A type of exoplanet made of rock or metal, smaller than Earth, possibly with oceans or atmospheres (artist's concept).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>

        {/* Tarjeta 2 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Super Earth
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Super-Earth exoplanets are also rocky, but between Earth and Neptune in size (artist's concept).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>

        {/* Tarjeta 3 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Neptune-like
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              This variety of exoplanet is similar in size to Uranus and Neptune, with an atmosphere of mostly hydrogen or helium (artist's concept).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Discover
            </Button>
          </CardActions>
        </Card>
      </section>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      {/* Additional Content */}
      <div>
        <h1>Bienvenido a mi página</h1>
        <p>Texto sobre el video de fondo</p>
      </div>
    </div>
  );
}
