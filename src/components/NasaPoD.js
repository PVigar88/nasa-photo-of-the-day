import React, { useState, useEffect } from "react";

export default function NasaPoD(props) {
  const { srcPOD } = props;

  return (
    <div>
      <img src={srcPOD} />
    </div>
  );
}
