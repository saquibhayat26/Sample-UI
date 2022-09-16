import React from "react";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import NewPost from "./NewPost";

function Home() {
  return (
    <HomeWrap>
      <SearchBar />
      <Buttons />
      <NewPost />
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.div`
  width: 100%;
  margin: auto;
`;
