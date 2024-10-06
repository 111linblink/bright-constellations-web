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

  const { type } = params; // Accedemos al parámetro dinámico 'id'
  const [exoplanets, setExoplanets] = useState([]);

  useEffect(() => {
    const res = exoplanets_info.filter((item) => item.type === type);

    setExoplanets(res);
  }, []);

  const sendRoute = (exo) => {
    router.push(`/${type}/${exo}`);
  };

  return (
    <div>
      <h2>{type} y descripción</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          /* background: "black", */
        }}
      >
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
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          justifyItems: "center",
        }}
      >
        {exoplanets.map((item) => (
          <Card
            sx={{ maxWidth: 345, borderRadius: "5%", py: 2 }}
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
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Parsecs from Earth: {item.pfe}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Planet Mass: {item.pm}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Stellar Magnitude: {item.sm}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
