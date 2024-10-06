"use client";

import React, { useEffect, useState } from "react";

import exoplanets_info from "@/exo-info.json";
import { StarMap } from "@/components/StarsMaps";

const infoExoEmpty = {
  name: "",
  pfe: "",
  pl: "",
  sm: "",
  dd: "",
  type: "",
};

const ExoPage = ({ params }) => {
  const { type, exo } = params;

  const [infoExo, setInfoExo] = useState(infoExoEmpty);

  useEffect(() => {
    const res = exoplanets_info.find(
      (item) => item.name === exo.replaceAll("-", " ")
    );

    setInfoExo(res);
  }, [exo]);

  return (
    <div>
      {/* <h1>Type: {type}</h1>
      <h2>Exo: {exo}</h2>
      <p>{JSON.stringify(infoExo)}</p> */}

      <StarMap />
    </div>
  );
};

export default ExoPage;
