import { useState } from "react"; 

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])

  const transition = (newMode) => {
    setMode(newMode);
    setHistory(prev => [newMode, ...prev]);
  }

  const back = () => {
    setMode(history[1]);
    const [prev, ...rest] = history;
    setHistory(prev => rest);
  }
  
  return {mode, transition, back};
};

export default useVisualMode;