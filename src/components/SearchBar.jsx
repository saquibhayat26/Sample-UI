import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Main = styled.div`
  background-color: #5e5454;
  height: 4em;
  width: 100%;
  display: flex;
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 70%;
  margin: auto;
  border: 1px solid #5e5454;
  background-color: #5e5454;
`;
const Icon = styled.span`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f0ddd6;
    color: #00ff00;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 8px;
  border: none;
  font-size: 22px;
  color: #6b6767;
  outline: none;
  background-color: #fff;
  padding-left: 12px;
`;

const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
  font-size: 28px;
  border: none;
  background-color: coral;
  color: #f0f0f0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f0ddd6;
    color: #ff0000;
  }
`;

function SearchBar() {
  return (
    <Main>
      <Wrapper>
        <Icon>
          <SearchOutlinedIcon style={{ backgroundColor: "transparent" }} />
        </Icon>
        <Input placeholder="Search... " />
        <Remove>x</Remove>
      </Wrapper>
    </Main>
  );
}

export default SearchBar;
