import React, { useEffect, useState } from "react";

export const generateHelloWorld = () => {
  return "hello world.";
};
export const App = () => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div data-testid="text">
      {isMounted && <div>{generateHelloWorld()}</div>}
    </div>
  );
};
