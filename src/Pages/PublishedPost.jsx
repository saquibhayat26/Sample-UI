import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import Post from "../components/Post";

function PublishedPost() {
  const select = useSelector((state) => state.post);
  const searchData = useSelector((state) => state.filter.data);
  return (
    <>
      {select.length !== 0 ? (
        <Main>
          {select
            .filter((val) => {
              if (!searchData) {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchData.toLowerCase()) ||
                val.desc.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, index) => (
              <Post key={index} id={index} title={val.title} desc={val.desc} />
            ))}
        </Main>
      ) : (
        <Main>
          <Message>No New Feed, Please Create One.</Message>
        </Main>
      )}
    </>
  );
}

export default PublishedPost;

const Main = styled.div`
  width: 70%;
  height: auto;
  margin: auto;
`;

const Message = styled.h1`
  color: black;
  text-align: center;
  justify-content: center;
  margin-top: 25%;
`;
