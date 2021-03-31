import React, { useState, useEffect } from "react";

export default function ContentPanel(props) {
  const { podTitle, podExplanation, podCopyright } = props;

  return (
    <div>
      <h2>{podTitle}</h2>
      <p>
        <b>Info:</b> {podExplanation}
      </p>
      <p>
        <b>Photo Credit:</b> {podCopyright}
      </p>
    </div>
  );
}
