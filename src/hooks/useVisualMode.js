import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev) => {
      if (replace) {
        const [first, ...rest] = prev;
        return [newMode, ...rest];
      }
      return [newMode, ...prev];
    });
  };

  const back = () => {
    if (history.length > 1) {
      setMode(history[1]);
      setHistory((prev) => {
        const [first, ...rest] = prev;
        return rest;
      });
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;
