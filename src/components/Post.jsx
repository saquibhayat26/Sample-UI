import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deletePost } from "./../redux/createPostSlice";
import { useEffect } from "react";

function Post({ id, title, desc }) {
  useEffect(() => {}, []);
  const select = useSelector((state) => state.filter.data);
  console.log(select);
  const dispatch = useDispatch();

  console.log(select);

  const handleClick = (e) => {
    let id = e.target.id;
    dispatch(deletePost(id));
  };
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>
        <ReactMarkdown>{desc}</ReactMarkdown>
      </Desc>
      <Button id={id} onClick={handleClick}>
        Delete
      </Button>
    </Wrapper>
  );
}

export default Post;

const Wrapper = styled.div`
  background-color: #fff;
  height: auto;
  padding: 2rem 6rem;
  margin-top: 1%;
  border-bottom: 1px solid lightgray;
`;

const Title = styled.h2`
  position: relative;
  background-color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Desc = styled.div`
  background-color: white;
  overflow-wrap: break-word;
  margin: 24px 0;
  line-height: 1.6rem;
  word-spacing: 2px;
  letter-spacing: 1.5px;
`;

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
