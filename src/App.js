import React, { useState } from "react";
import VideoList from "./components/VideoList";
import { fetchContent } from "./functions/fetchContent";

function App() {
  const [list, setList] = useState(fetchContent());
  return (
    <VideoList list={list} />
  );
}

export default App;
