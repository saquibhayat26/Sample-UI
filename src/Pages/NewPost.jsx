import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { publishPost } from "../redux/createPostSlice";

function NewPost() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  function handlePublish() {
    dispatch(publishPost({ title: data, desc: value }));
    setData("");
    setValue("");
  }

  function handleInput(e) {
    let inputTitle = e.target.value;
    setData(inputTitle);
  }

  return (
    <Main>
      <Form>
        <Label>Title</Label>
        <Input
          placeholder="Give title"
          value={data}
          onChange={(e) => handleInput(e)}
        />
        <Label>Description</Label>
        <MDEditor value={value} onChange={setValue} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
        <Button onClick={handlePublish} type="submit">
          Publish
        </Button>
      </Form>
    </Main>
  );
}

export default NewPost;

const Main = styled.div`
  width: 70%;
  height: 75vh;
  margin: auto;
  padding: 1rem 0;
  margin-top: 1%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.3rem;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Input = styled.input`
  height: 2rem;
  font-size: 16px;
  padding: 0 8px;
  margin-bottom: 2rem;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  height: 2rem;
  margin-top: 2rem;
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
    color: #000000;
  }
`;
