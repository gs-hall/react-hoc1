import React from "react";
import DateTime from "./DateTime";

export default function Video(props) {
  return (
    <div className="video">
        <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.url} />
        <DateTime date={props.date} />
    </div>
)
};