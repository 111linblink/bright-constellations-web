"use client";

import React from "react";
import "../styles/animations.css";

const page = () => {
  return (
    <>
      <h1>Hola</h1>
      <button
        className="pixelart-to-css  "
        onClick={() => {
          alert("Hola");
        }}
      >
        Hola
      </button>
    </>
  );
};

export default page;
