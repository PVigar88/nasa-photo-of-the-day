import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  h2{
    color:blue;
  }
  p{
    color: white;
    width: ${(props) => props.theme.contentPanel.width};
    margin-left: 20%;
    right-margin: 30%
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-align: ${(props) => props.theme.contentPanel.justifyContent};
  }
  b{
    color:grey;
  }
  
`;

export default function ContentPanel(props) {
  const { podTitle, podExplanation, podCopyright } = props;
  if (podCopyright) {
    return (
      <StyledContent>
        <h2>{podTitle}</h2>
        <div>
          <p>
            <b>Info:</b> {podExplanation}
          </p>
          <p>
            <b>Photo Credit:</b> {podCopyright}
          </p>
        </div>
      </StyledContent>
    );
  } else {
    return (
      <div>
        <h2>{podTitle}</h2>
        <StyledContent>
          <p>
            <b>Info:</b> {podExplanation}
          </p>
        </StyledContent>
      </div>
    );
  }
}
