import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: red;
  text-decoration: underline;
`;

export default function Header(props) {
  const { podDate } = props;

  return (
    <div>
      <StyledHeader>NASA Picture of the Day for : {podDate}</StyledHeader>
    </div>
  );
}
