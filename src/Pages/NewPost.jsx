import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { publishPost } from "../redux/createPostSlice";

let postPreview = {
  title: "",
  desc: "",
};

function NewPost() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(postPreview);
  console.log(data);

  const dispatch = useDispatch();

  function updateValue() {}

  function handlePublish() {
    setData({ ...data, desc: value });
    console.log(data);
    dispatch(publishPost(data));
  }

  function handleInput(e) {
    let inputTitle = e.target.value;
    setData({ ...data, title: inputTitle });
  }

  return (
    <Main>
      <Form>
        <Label>Title</Label>
        <Input placeholder="Give title" onChange={(e) => handleInput(e)} />
        <Label>Description</Label>
        <MDEditor value={value} onChange={(setValue, () => updateValue())} />
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
  margin-top: 1%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input``;

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
    color: #000000;
  }
`;
