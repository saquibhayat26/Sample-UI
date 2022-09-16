import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Buttons() {
  return (
    <Main>
      <Wrapper>
        <Button color="green">
          {" "}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/new-post"}
          >
            New Post
          </Link>
        </Button>
        <Button color="black">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/published-post"}
          >
            Published Post
          </Link>
        </Button>
      </Wrapper>
    </Main>
  );
}

export default Buttons;

const Main = styled.div`
  width: 70%;
  margin: auto;
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  margin-top: 1%;
`;

const Button = styled.button`
  height: 3rem;
  width: 40%;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  background-color: #635e56;
  color: #fcfcfc;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s;
  &:hover {
    background-color: #f0ddd6;
    color: ${(props) => props.color};
  }
`;
