"use client";

import React, { useEffect, useState } from "react";

import exoplanets_info from "@/exo-info.json";
import exoplanets_assets from "@/exo-assets.json";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();

  const { type } = params;
  const [exoplanets, setExoplanets] = useState([]);

  useEffect(() => {
    const res = exoplanets_info.filter((item) => item.type === type);

    setExoplanets(res);
  }, [type]);

  const sendRoute = (exo) => {
    router.push(`/${type}/${exo}`);
  };

  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <h1 style={{ marginLeft: "1000px", fontSize: "50px" }}>
        {type.toUpperCase()}
      </h1>

      {/* Contenedor para el iframe y el Box */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly", // Para dejar espacio entre el iframe y el Box
          margin: "20px",
          alignItems: "center", // Para alinear verticalmente
        }}
      >
        {/* iframe */}
        <iframe
          title="Exo_planeta"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src={exoplanets_assets.find((item) => item.type === type)?.frame_url}
          style={{ width: "800px", height: "600px" }}
        />

        {/* Box al lado del iframe */}
        <Box
          component="section"
          sx={{ p: 3, m: 2, border: "1px dashed grey", color: "white" }}
          style={{ width: "700px" }}
        >
          <p>{exoplanets_assets.find((item) => item.type === type)?.p1}</p>
        </Box>
      </div>

      {/* Cards de los exoplanetas */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          justifyItems: "center",
        }}
      >
        {exoplanets.map((item) => (
          //   <Card
          //     sx={{
          //       maxWidth: 345,
          //       borderRadius: "5%",
          //       background: "black",
          //       "&:hover": { bgcolor: "#1c1c1c" },
          //     }}
          //     key={item.name}
          //   >
          //     <CardActionArea
          //       onClick={() => sendRoute(item.name.replaceAll(" ", "-"))}
          //     >
          //       <CardMedia
          //         component="img"
          //         height="140"
          //         src={exoplanets_assets.find((item) => item.type === type)?.url}
          //         alt={type}
          //       />
          //       <CardContent sx={{ textAlign: "center" }}>
          //         <Typography
          //           gutterBottom
          //           variant="h5"
          //           component="div"
          //           sx={{ color: "white" }}
          //         >
          //           {item.name}
          //         </Typography>
          //         <Typography variant="body2" sx={{ color: "white" }}>
          //           Parsecs from Earth: {item.pfe}
          //         </Typography>
          //         <Typography variant="body2" sx={{ color: "white" }}>
          //           Planet Mass: {item.pm}
          //         </Typography>
          //         <Typography variant="body2" sx={{ color: "white" }}>
          //           Stellar Magnitude: {item.sm}
          //         </Typography>
          //         <Typography variant="body2" sx={{ color: "white" }}>
          //           Discovery Date: {item.dd}
          //         </Typography>
          //       </CardContent>
          //     </CardActionArea>
          //   </Card>

          <Card
            sx={{
              maxWidth: 345,
              borderRadius: "5%",
              py: 2,
              backgroundColor: "#1c1c1c",
              color: "white",
              marginTop: "40px",
            }}
            key={item.name}
          >
            <CardActionArea
              onClick={() => sendRoute(item.name.replaceAll(" ", "-"))}
            >
              <CardMedia
                component="img"
                height="140"
                src={exoplanets_assets.find((item) => item.type === type)?.url}
                alt={type}
              />
              <CardContent sx={{ textAlign: "center", color: "white" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "white" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Parsecs from Earth: {item.pfe}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Planet Mass: {item.pm}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Stellar Magnitude: {item.sm}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Discovery Date: {item.dd}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Page;
