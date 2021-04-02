import React from "react";

export default function Header(props) {
  const { podDate } = props;

  return (
    <div>
      <h1>NASA Picture of the Day for : {podDate}</h1>
    </div>
  );
}
