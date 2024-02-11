import { useState } from "react"; 

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial)
  const transition = (newMode) => {
    setMode(prev => prev = newMode);
  }
  return {mode, transition};
};

export default useVisualMode;