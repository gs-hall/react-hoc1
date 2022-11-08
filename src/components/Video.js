import React from "react";
import DateTime from "./DateTime";
import { withPrettiness } from "./DateTimePretty";
import getPrettyDate from "./getPrettyDate";

export default function Video(props) {
  const DateTimePretty = withPrettiness(DateTime, getPrettyDate);
  return (
    <div className="video">
        <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.url} />
        <DateTimePretty date={props.date} />
    </div>
)
};