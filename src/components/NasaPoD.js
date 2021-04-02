import React from "react";

export default function NasaPoD(props) {
  const { srcPOD, format } = props;

  if (format === "image") {
    return (
      <div>
        <img src={srcPOD} alt="Nasa photo of the day" />
      </div>
    );
  } else if (format === "video") {
    return (
      <div>
        <iframe width="420" height="315" src={srcPOD}></iframe>

        {/* <video width="320" height="240" controls>
          <source src= type="video/webm" />
        </video> */}
      </div>
    );
  } else {
    return (
      <div>
        <p>Something didn't go right...</p>
      </div>
    );
  }
}
