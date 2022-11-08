import React, { useState } from "react";
import VideoList from "./components/VideoList";
import { fetchContent } from "./functions/fetchContent";
import "./css/index.css";

function App() {
  const [list, setList] = useState(fetchContent());
  return (
    <VideoList list={list} />
  );
}

export default App;
