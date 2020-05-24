import * as React from "react";

export const generateHelloWorld = () => {
  return "hello world.";
};

export const App = () => {
  return (
    <div>
      <div>{generateHelloWorld()}</div>
    </div>
  );
};
