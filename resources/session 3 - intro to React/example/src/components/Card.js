import React from "react";

export default function Card(props) {
  return (
    <div>
      <p>{props.movie}</p>
      {props.rating && <p>This movie has rating of {props.rating}</p>}
    </div>
  );
}
