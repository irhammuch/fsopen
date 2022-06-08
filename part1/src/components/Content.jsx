import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises}></Part>
      ))}
    </>
  );
};
export default Content;
