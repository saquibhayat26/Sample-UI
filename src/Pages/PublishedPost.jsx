import React from "react";
import styled from "styled-components";

function PublishedPost() {
  return (
    <Main>
      <Wrapper>
        <Title>Title</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fugit
          totam laborum dicta officia. Dolorum minus sapiente error eaque
          tenetur, asperiores doloribus adipisci ipsum blanditiis excepturi
          dicta? Eligendi, amet suscipit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus dolor fugit harum laudantium odit hic ab!
          Doloribus, repellat repellendus pariatur laboriosam molestias vitae?
          Adipisci inventore sequi qui doloribus labore quibusdam!
        </Desc>
        <Button>Delete</Button>
      </Wrapper>
    </Main>
  );
}

export default PublishedPost;

const Main = styled.div`
  width: 70%;
  margin: auto;
  border-bottom: 1px solid lightgray;
`;

const Wrapper = styled.div`
  background-color: #fff;
  height: auto;
  padding: 4rem 8rem;
  margin-top: 1%;
`;

const Title = styled.h2`
  position: relative;
  background-color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Desc = styled("p")({
  position: "relative",
  backgroundColor: "white",
  margin: "24px 0",
  lineHeight: 2,
  wordSpacing: 3,
  letterSpacing: 2,
});

const Button = styled.button`
  height: 2rem;
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: coral;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s;
  &:hover {
    background-color: #f0ddd6;
    color: #ff0000;
  }
`;
