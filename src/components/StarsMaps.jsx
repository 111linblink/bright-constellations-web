import React from "react";

import "@/planetary-resources/index.css";

const StarMap = () => {
  return (
    <>
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
        src="http://127.0.0.1:5500/"
        style={{ width: "100vw", height: "100vh" }}
      />
    </>
  );
};

export { StarMap };
